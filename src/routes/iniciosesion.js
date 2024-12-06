const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

// Ruta de inicio de sesión
router.get('/', function (req, res, next) {
  res.render('iniciosesion', { user: req.session.user });
});

// Manejo de inicio de sesión
router.post('/', async (req, res) => {
  const correoElectronico = req.body.correo_electronico;
  const contrasena = req.body.contrasena;

  try {
    const usuario = await sequelize.models.Usuario.findOne({
      where: { correo_electronico: correoElectronico },
    });

    if (usuario) {
      bcrypt.compare(contrasena, usuario.contrasena, function (err, result) {
        if (result) {
          // Guardamos el usuario en la sesión
          req.session.user = {
            correo_electronico: usuario.correo_electronico,
            nombre: usuario.nombre,
            es_admin: usuario.es_admin,
            imagen_perfil: usuario.imagen_perfil,
          };
          req.session.message = "¡Inicio de sesión exitoso!";

          // Redirigimos al perfil
          res.redirect('/perfil');  // Redirige al perfil del usuario
        } else {
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          res.redirect("/iniciosesion");
        }
      });
    } else {
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      res.redirect("/iniciosesion");
    }
  } catch (error) {
    res.status(500).send("Hubo un problema con el servidor.");
  }
});
module.exports = router;
