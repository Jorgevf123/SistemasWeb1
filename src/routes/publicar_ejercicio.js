const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
    const usuario = req.session.user || null; // Asegúrate de que `user` no sea undefined
    res.render('publicar_ejercicio', { title: 'Publicar Ejercicio',
        user:usuario,
        imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp'});
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
