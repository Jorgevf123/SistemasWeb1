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
const upload = multer({ storage });

// Middleware para restringir acceso a usuarios registrados o administradores
function restrictToUsers(req, res, next) {
    if (!req.session?.user || req.session.user.es_invitado) {
        return res.status(403).send('Acceso no autorizado');
    }
    next();
}

// Ruta para mostrar el formulario de publicación de ejercicios
router.get('/publicar_ejercicio', restrictToUsers, (req, res) => {
    res.render('publicar_ejercicio', { 
        title: 'Publicar Ejercicio',
        user: req.session.user 
    });
});

// Ruta para manejar la publicación de ejercicios
router.post('/guardar-ejercicio', restrictToUsers, upload.single('video'), (req, res) => {
    const { titulo, descripcion } = req.body;
    const video = req.file ? `/images/${req.file.filename}` : null;
    const userId = req.session.user.id; // ID del usuario registrado

    console.log('Título:', titulo);
    console.log('Descripción:', descripcion);
    console.log('Video:', video);
    console.log('Usuario ID:', userId);

    if (!titulo || !descripcion || !video) {
        console.error('Faltan campos obligatorios');
        return res.status(400).send('Todos los campos son obligatorios');
    }

    // Conexión a la base de datos SQLite
    const db = new sqlite3.Database('sequelize/db.sqlite');

    // Insertar el ejercicio en la base de datos
    const query = `INSERT INTO Ejercicios (titulo, descripcion, video, user_id) VALUES (?, ?, ?, ?)`;
    console.log('Título:', titulo);
    console.log('Descripción:', descripcion);
    console.log('Video ruta:', video); // Asegúrate de que esta ruta es válida
    console.log('Usuario ID:', userId);

    db.run(query, [titulo, descripcion, video, userId], function (err) {
        if (err) {
            console.error('Error al guardar el ejercicio:', err);
            return res.status(500).send('Error al guardar el ejercicio');
        }

        console.log('Ejercicio guardado con éxito, ID:', this.lastID);
        res.redirect('/ejercicios'); // Redirigir de vuelta a la lista de ejercicios
    });

    db.close(); // Cerrar conexión a la base de datos
});

// Ruta para mostrar la lista de ejercicios
router.get('/', (req, res) => {
    const db = new sqlite3.Database('sequelize/db.sqlite');
    const query = `SELECT Ejercicios.id, Ejercicios.titulo, Ejercicios.descripcion, Ejercicios.video, Usuarios.nombre AS usuario 
                   FROM Ejercicios 
                   INNER JOIN Usuarios ON Ejercicios.user_id = Usuarios.id`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error al obtener ejercicios:', err);
            return res.status(500).send('Error al obtener los ejercicios');
        }

        const user = req.session?.user || null; // Pasar el usuario a la vista
        res.render('ejercicios', { ejercicios: rows, user });
    });

    db.close();
});

// Ruta para manejar el inicio de sesión y establecer la sesión del usuario
router.post('/iniciar_sesion', (req, res) => {
    const { correo, contrasena } = req.body;

    const db = new sqlite3.Database('sequelize/db.sqlite');
    const query = `SELECT * FROM Usuarios WHERE correo_electronico = ? AND contrasena = ?`;
    db.get(query, [correo, contrasena], (err, usuario) => {
        if (err) {
            console.error('Error en la base de datos:', err);
            return res.status(500).send('Error interno');
        }

        if (!usuario) {
            return res.status(401).send('Credenciales incorrectas');
        }

        req.session.user = {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo_electronico,
            es_admin: usuario.es_admin,
            es_invitado: false
        };

        res.redirect('/'); // Redirigir al inicio o página principal
    });

    db.close(); // Cierra la conexión a la base de datos
});

module.exports = router;




