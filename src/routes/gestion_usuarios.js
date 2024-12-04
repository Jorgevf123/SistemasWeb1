const express = require('express');
const router = express.Router();

// Ruta para gestión de usuarios
router.get('/', (req, res) => {
    // Renderiza la vista gestion_usuarios.ejs
    res.render('gestion_usuarios', { title: 'Gestión de Usuarios' });
});

module.exports = router;

