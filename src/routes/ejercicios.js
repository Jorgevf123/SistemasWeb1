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
router.post('/guardar-ejercicio', async (req, res) => {
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

    // Conexión a la base de datos SQLite
    await sequelize.models.articulos_comunidad.create({
        titulo,
        descripcion,
        media,
        nombre,
      });

        console.log('Ejercicio guardado con éxito, ID:', this.lastID);
        res.redirect('/ejercicios'); // Redirigir a la lista de ejercicios
});


// Ruta para mostrar la lista de ejercicios (sin restricción para invitados)
router.get('/', async (req, res) => {
    let titulo= "";
    let descripcion= null;
    let media= "";
    let id= "";
    const usuario = req.session.user;
    const ejercicios = await sequelize.models.Ejercicios.findAll();
        total_items = ejercicios.length;
        ejerciciosProcesados = ejercicios.map((ejercicios) => {
        return{
          id: ejercicios.id,
          titulo: ejercicios.titulo, 
          descripcion: ejercicios.descripcion,
        }
    });
       res.render('ejercicios', { title: 'Ejercicios',
                                    user:usuario ? usuario : false, 
                                    ejercicios,
                                    imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp',
                                  });
});


module.exports = router;





