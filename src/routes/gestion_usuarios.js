const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose(); // Usar sqlite3 para consultas directas

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('sequelize/db.sqlite'); // Ajusta la ruta si es necesario

// Ruta para gestión de usuarios
router.get('/', (req, res) => {
    db.all('SELECT id, correo_electronico, nombre, contrasena, es_admin FROM Usuarios', (err, rows) => {
        if (err) {
            console.error("Error al obtener los usuarios:", err);
            res.status(500).send("Error al cargar los datos de usuarios.");
        } else {
            res.render('gestion_usuarios', { 
                title: 'Gestión de Usuarios',
                usuarios: rows,
                user: req.session?.user || null // Aseguramos que user se pase siempre
            });
        }
    });
});

module.exports = router;


