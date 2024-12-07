const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para gestión de usuarios
router.get('/', (req, res) => {
    // Asegúrate de pasar el objeto `user` a la vista
    const user = req.user || null;  // Si no tienes un usuario, asignas `null`
    
    // Renderiza la vista gestion_usuarios.ejs y pasa `user`
    res.render('gestion_usuarios', { 
        title: 'Gestión de Usuarios',
        user: user  // Pasamos la variable user a la vista
    });
});

module.exports = router;