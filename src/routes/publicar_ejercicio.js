const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
    res.render('publicar_ejercicio', { title: 'Publicar Ejercicio' });
});

// Ruta para manejar el envío del formulario
router.post('/guardar', (req, res) => {
    const { titulo, descripcion } = req.body;
    const video = req.file ? req.file.filename : null; // Si estás subiendo un video

    // Aquí deberías guardar el ejercicio en la base de datos
    // Después redirige a la página de ejercicios
    res.redirect('/ejercicios');
});

module.exports = router;
