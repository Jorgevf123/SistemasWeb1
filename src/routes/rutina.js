const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
/* GET home page. */
router.get('/', function(req, res, next) {
    const usuario = req.session.user || null; // Asegúrate de que `user` no sea undefined
    res.render('rutina' , { title: 'Rutinas', user:usuario, imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp'});
  });

module.exports = router;

