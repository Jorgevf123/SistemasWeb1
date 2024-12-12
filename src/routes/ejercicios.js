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
        const ejercicios = await sequelize.models.Ejercicios.findAll({
            where: { aprobado: true }, // Solo ejercicios aprobados
        });

        res.render('ejercicios', {
            title: 'Ejercicios',
            user: usuario || null,
            ejercicios,
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
        await sequelize.models.Ejercicios.create({ titulo, descripcion, video: media, autor: nombre });
        res.redirect('/ejercicios');
    } catch (err) {
        console.error('Error al guardar el ejercicio:', err);
        res.status(500).send('Error al guardar el ejercicio');
    }
});

module.exports = router;






