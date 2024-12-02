const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

// Renderiza la página de inicio de sesión
router.get('/', function(req, res, next) {
  res.render('iniciosesion', { user: req.session.user });
});

// Manejo del inicio de sesión
router.post('/', async (req, res) => {
  const correoElectronico = req.body.correo_electronico; // Cambiado para coincidir con el modelo
  const contrasena = req.body.contrasena; // Cambiado para coincidir con el modelo

  try {
    // Busca al usuario por su correo electrónico
    const usuario = await sequelize.models.Usuario.findOne({
      where: { correo_electronico: correoElectronico },
    });

    if (usuario) {
      // Compara la contraseña proporcionada con la almacenada en la base de datos
      bcrypt.compare(contrasena, usuario.contrasena, function (err, result) {
        if (result) {
          // Inicio de sesión exitoso
          req.session.user = { correo_electronico: usuario.correo_electronico, nombre: usuario.nombre };
          req.session.message = "¡Inicio de sesión exitoso!";
          console.log(`Inicio de sesión exitoso para el usuario: ${usuario.correo_electronico}`); // Agregado console.log
          res.render('perfil', { usuario: req.session.user }); // Redirige a perfil.ejs
        } else {
          // Contraseña incorrecta
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          console.log(`Intento de inicio de sesión fallido para el usuario: ${correoElectronico}`); // Agregado console.log
          res.redirect("/iniciosesion");
        }
      });
    } else {
      // Usuario no encontrado
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      console.log(`Intento de inicio de sesión fallido: Usuario no encontrado (${correoElectronico})`); // Agregado console.log
      res.redirect("/iniciosesion");
    }
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error);
    res.status(500).send("Hubo un problema con el servidor.");
  }
});

module.exports = router;
