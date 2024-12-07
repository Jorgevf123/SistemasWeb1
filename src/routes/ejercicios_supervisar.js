const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para ejercicios a supervisar
router.get('/', (req, res) => {
    // Asegúrate de pasar el objeto `user` a la vista
    const user = req.user || null;  // Si no tienes un usuario, asignas `null`
    // Renderiza la vista ejercicios_supervisar.ejs
    res.render('ejercicios_supervisar', { 
        title: 'Ejercicios a Supervisar',
        user: user  // Pasamos la variable user a la vista
    });
});

module.exports = router;