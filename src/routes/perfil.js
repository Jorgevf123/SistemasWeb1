const express = require('express');
const router = express.Router();

// Ruta para mostrar el perfil del usuario
router.get('/', function (req, res) {
  // Verificamos si el usuario está logueado
  if (req.session.user) {
    // Si está logueado, renderizamos la página del perfil
    res.render('perfil', { usuario: req.session.user });
  } else {
    // Si no está logueado, redirigimos al inicio de sesión
    req.session.error = "Debes iniciar sesión para acceder a tu perfil.";
    res.redirect('/iniciosesion');
  }
});

module.exports = router;
