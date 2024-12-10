const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Configuración de multer para subir videos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Carpeta donde se guardan los videos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para los archivos
    },
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|mp4|mov|avi/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extName && mimeType) {
            return cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes y videos.'));
        }
    },
});

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
router.post('/guardar-ejercicio', restrictToUsers, upload.single('media'), (req, res) => {
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
    const db = new sqlite3.Database('sequelize/db.sqlite');

    const query = `INSERT INTO Ejercicios (titulo, descripcion, video, nombre) VALUES (?, ?, ?, ?)`;
    db.run(query, [titulo, descripcion, media, nombre], function (err) {
        if (err) {
            console.error('Error al guardar el ejercicio:', err);
            return res.status(500).send('Error al guardar el ejercicio');
        }

        console.log('Ejercicio guardado con éxito, ID:', this.lastID);
        res.redirect('/ejercicios'); // Redirigir a la lista de ejercicios
    });

    db.close();
});


// Ruta para mostrar la lista de ejercicios (sin restricción para invitados)
router.get('/', (req, res) => {
    const db = new sqlite3.Database('sequelize/db.sqlite');
    const query = `SELECT id, titulo, descripcion, video, nombre FROM Ejercicios`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error al obtener ejercicios:', err);
            return res.status(500).send('Error al obtener los ejercicios');
        }

        const user = req.session?.user || null; // Pasar el usuario a la vista
        res.render('ejercicios', { ejercicios: rows, 
            user,
        title: 'Lista de ejercicios' 
    });

    });

    db.close();
});


module.exports = router;





