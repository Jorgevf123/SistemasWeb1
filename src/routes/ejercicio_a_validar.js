const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para ejercicio a validar
router.get('/', (req, res) => {
    // Asegúrate de pasar el objeto `user` a la vista
    const user = req.user || null;  // Si no tienes un usuario, asignas `null`
    // Renderiza la vista ejercicio_a_validar.ejs
    res.render('ejercicio_a_validar', { 
        title: 'Ejercicio a Validar',
        user: user  // Pasamos la variable user a la vista
    });
});

module.exports = router;

