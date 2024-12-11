const path = require('path');
const express = require('express');
const sequelize = require('../sequelize')
const router = express.Router();

// Configuración de multer para subir videos

// Middleware para restringir acceso a usuarios registrados o administradores
function restrictToUsers(req, res, next) {
    if (!req.session?.user || req.session.user.es_invitado) {
        return res.status(403).send('Acceso no autorizado');
    }
    next();
}

// Ruta para mostrar el formulario de publicación de ejercicios
router.get('/publicar_ejercicio', restrictToUsers, (req, res) => {
    const usuario = req.session.user || null; // Asegúrate de que `user` no sea undefined
    res.render('publicar_ejercicio', { 
        title: 'Publicar Ejercicio',
        user:usuario, 
        imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp'
    });
        
    });

// Ruta para manejar la publicación de ejercicios
const multer = require('multer');

// Configuración de multer para manejar la subida de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Carpeta para guardar imágenes/videos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único
    }
});

const upload = multer({ storage });

router.post('/guardar-ejercicio', restrictToUsers, upload.single('media'), async (req, res) => {
    const { nombre, titulo, descripcion } = req.body;
    const media = req.file ? `/images/${req.file.filename}` : null;

    console.log('Nombre del Usuario:', nombre);
    console.log('Título:', titulo);
    console.log('Descripción:', descripcion);
    console.log('Media:', media);

    if (!nombre || !titulo || !descripcion || !media) {
        console.error('Faltan campos obligatorios');
        return res.status(400).send('Todos los campos son obligatorios');
    }

    try {
        // Guardar el ejercicio en la base de datos
        const ejercicio = await sequelize.models.Ejercicios.create({
            titulo,
            descripcion,
            video: media,
            autor: nombre,
        });
        console.log('Ejercicio guardado con éxito:', ejercicio.id);
        res.redirect('/ejercicios'); // Redirigir a la lista de ejercicios
    } catch (err) {
        console.error('Error al guardar el ejercicio:', err);
        res.status(500).send('Error al guardar el ejercicio');
    }
});


// Ruta para mostrar la lista de ejercicios (sin restricción para invitados)
router.get('/', async (req, res) => {
    try {
        const usuario = req.session.user;

        // Obtener solo los ejercicios aprobados
        const ejercicios = await sequelize.models.Ejercicios.findAll({
            where: { aprobado: true }, // Filtrar por ejercicios aprobados
        });

        const total_items = ejercicios.length; // Contar el número total de ejercicios

        res.render('ejercicios', { 
            title: 'Ejercicios',
            user: usuario ? usuario : false, 
            ejercicios,
            total_items, // Pasar la variable a la vista si es necesaria
            imagen_perfil: usuario ? usuario.imagen_perfil : '/images/avatar.webp',
        });
    } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
        res.status(500).send('Error al cargar los ejercicios');
    }
});



module.exports = router;





