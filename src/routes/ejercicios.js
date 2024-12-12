const path = require('path');
const express = require('express');
const sequelize = require('../sequelize');
const router = express.Router();

// Configuración de multer para manejar la subida de archivos
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Middleware para restringir acceso a usuarios registrados o administradores
function restrictToUsers(req, res, next) {
    if (!req.session?.user || req.session.user.es_invitado) {
        return res.status(403).send('Acceso no autorizado');
    }
    next();
}

// Middleware para restringir acceso a usuarios baneados
const restrictBannedUsers = (req, res, next) => {
    if (req.session.user && req.session.user.baneado) {
        req.session.destroy(err => {
            if (err) {
                console.error('Error al destruir la sesión del usuario baneado:', err);
            }
            res.redirect('/iniciosesion?error=Tu cuenta ha sido baneada.');
        });
    } else {
        next();
    }
};

// Ruta para mostrar la lista de ejercicios (protegida para usuarios baneados)
router.get('/', restrictBannedUsers, async (req, res) => {
    try {
        const usuario = req.session.user;

        // Obtén los ejercicios aprobados
        const ejercicios = await sequelize.models.Ejercicios.findAll({
            attributes: ['id', 'titulo', 'descripcion', 'video', 'autor', 'comentarios'],
            where: { aprobado: true }, // Filtrar solo ejercicios aprobados
        });

        // Si los comentarios están en formato JSON, asegúrate de parsearlos
        const ejerciciosConComentarios = ejercicios.map(ejercicio => {
            const comentarios = Array.isArray(ejercicio.comentarios)
                ? ejercicio.comentarios
                : JSON.parse(ejercicio.comentarios || '[]');
        
            return { ...ejercicio.toJSON(), comentarios };
        });
        

        res.render('ejercicios', {
            title: 'Ejercicios',
            user: usuario || null,
            ejercicios: ejerciciosConComentarios,
            comentariosShoulders: global.comentariosShoulders || [],
            comentariosChest: global.comentariosChest || [],
            comentariosBiceps: global.comentariosBiceps || [],
            comentariosQuads: global.comentariosQuads || [],
            comentariosLats: global.comentariosLats || [],
            comentariosTriceps: global.comentariosTriceps || [],
            comentariosHamstrings: global.comentariosHamstrings || [],
            comentariosCalves: global.comentariosCalves || [],
        });
    } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
        res.status(500).send('Error al cargar los ejercicios.');
    }
});





// Ruta para mostrar el formulario de publicación de ejercicios
router.get('/publicar_ejercicio', restrictToUsers, restrictBannedUsers, (req, res) => {
    const usuario = req.session.user || null;
    res.render('publicar_ejercicio', {
        title: 'Publicar Ejercicio',
        user: usuario,
        imagen_perfil: usuario ? usuario.imagen_perfil : '/images/avatar.webp',
    });
});

// Ruta para manejar la publicación de ejercicios
router.post('/guardar-ejercicio', restrictToUsers, restrictBannedUsers, upload.single('media'), async (req, res) => {
    const { nombre, titulo, descripcion } = req.body;
    const media = req.file ? `/images/${req.file.filename}` : null;

    if (!nombre || !titulo || !descripcion || !media) {
        console.error('Faltan campos obligatorios');
        return res.status(400).send('Todos los campos son obligatorios');
    }

    try {
        // Inicializar comentarios como un array vacío
        await sequelize.models.Ejercicios.create({ 
            titulo, 
            descripcion, 
            video: media, 
            autor: nombre, 
            comentarios: [] // Esto asegura que los comentarios siempre se inicialicen
        });
        res.redirect('/ejercicios');
    } catch (err) {
        console.error('Error al guardar el ejercicio:', err);
        res.status(500).send('Error al guardar el ejercicio');
    }
});


router.post('/comentarios', restrictToUsers, async (req, res) => {
    const { texto, ejercicioId } = req.body; // Texto del comentario y ID del ejercicio
    const usuario = req.session.user; // Usuario de la sesión actual

    if (!texto || !ejercicioId) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    try {
        // Busca el ejercicio en la base de datos
        const ejercicio = await sequelize.models.Ejercicios.findByPk(ejercicioId);

        if (!ejercicio) {
            return res.status(404).send('Ejercicio no encontrado.');
        }

        // Asegurar que comentarios es un array válido
        const comentarios = Array.isArray(ejercicio.comentarios)
            ? ejercicio.comentarios
            : JSON.parse(ejercicio.comentarios || '[]');

        // Añadir el nuevo comentario
        comentarios.push({
            usuario: usuario.nombre || 'Desconocido', // Nombre del usuario
            texto,
            fecha: new Date().toISOString(),
        });

        // Actualizar el campo `comentarios` en la base de datos
        ejercicio.comentarios = comentarios;
        await ejercicio.save();

        // Redirige a la página de ejercicios
        res.redirect('/ejercicios');
    } catch (error) {
        console.error('Error al guardar el comentario:', error);
        res.status(500).send('Error al guardar el comentario.');
    }
});





router.post('/comentarios/predefinidos', restrictToUsers, async (req, res) => {
    const { texto, ejercicio } = req.body;
    const usuario = req.session.user;

    if (!texto || !ejercicio) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    try {
        // Lógica para agregar comentarios a ejercicios predefinidos
        const predefinidosComentarios = {
            shoulders: "comentariosShoulders",
            chest: "comentariosChest",
            biceps: "comentariosBiceps",
            quads: "comentariosQuads",
            lats: "comentariosLats",
            triceps: "comentariosTriceps",
            hamstrings: "comentariosHamstrings",
            calves: "comentariosCalves",
        };

        const comentariosKey = predefinidosComentarios[ejercicio];
        if (!comentariosKey) {
            return res.status(400).send('Ejercicio no válido.');
        }

        // Simula el almacenamiento en un objeto global o base de datos (modificar según tu implementación)
        if (!global[comentariosKey]) {
            global[comentariosKey] = [];
        }

        global[comentariosKey].push({
            usuario: usuario.nombre,
            texto,
            fecha: new Date(),
        });

        res.redirect('/ejercicios');
    } catch (error) {
        console.error('Error al guardar el comentario:', error);
        res.status(500).send('Error al guardar el comentario.');
    }
});


router.post('/borrar-comentarios', restrictToUsers, async (req, res) => {
    const { ejercicioId } = req.body;

    if (!ejercicioId) {
        return res.status(400).send('Falta el ID del ejercicio.');
    }

    try {
        const ejercicio = await sequelize.models.Ejercicios.findByPk(ejercicioId);

        if (!ejercicio) {
            return res.status(404).send('Ejercicio no encontrado.');
        }

        // Vaciar los comentarios
        ejercicio.comentarios = [];
        await ejercicio.save();

        res.redirect('/ejercicios');
    } catch (error) {
        console.error('Error al borrar los comentarios:', error);
        res.status(500).send('Error al borrar los comentarios.');
    }
});


router.post('/borrar-ejercicio', restrictToUsers, async (req, res) => {
    const { ejercicioId } = req.body;

    if (!ejercicioId) {
        return res.status(400).send('Falta el ID del ejercicio.');
    }

    try {
        await sequelize.models.Ejercicios.destroy({ where: { id: ejercicioId } });

        res.redirect('/ejercicios');
    } catch (error) {
        console.error('Error al borrar el ejercicio:', error);
        res.status(500).send('Error al borrar el ejercicio.');
    }
});




module.exports = router;






