// Rutas de Express
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
  const correoElectronico = req.body.correo_electronico;
  const contrasena = req.body.contrasena;

  try {
    // Busca al usuario por su correo electrónico
    const usuario = await sequelize.models.Usuario.findOne({
      where: { correo_electronico: correoElectronico },
    });

    if (usuario) {
      bcrypt.compare(contrasena, usuario.contrasena, function (err, result) {
        if (result) {
          // Inicio de sesión exitoso
          req.session.user = { 
            correo_electronico: usuario.correo_electronico, 
            nombre: usuario.nombre, 
            es_admin: usuario.es_admin 
          };
          req.session.message = "¡Inicio de sesión exitoso!";

          if (usuario.es_admin) {
            // Redirigir a la página de administración si es admin
            res.render('PerfilAdmin', { usuario: req.session.user });
          } else {
            // Redirige a perfil normal si no es admin
            res.render('perfil', { usuario: req.session.user });
          }
        } else {
          // Contraseña incorrecta
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          res.redirect("/iniciosesion");
        }
      });
    } else {
      // Usuario no encontrado
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      res.redirect("/iniciosesion");
    }
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error);
    res.status(500).send("Hubo un problema con el servidor.");
  }
});

// Ruta para la página de administración
router.get('/admin', function(req, res) {
  // Verificar que el usuario es admin
  if (req.session.user && req.session.user.es_admin) {
    res.render('PerfilAdmin', { usuario: req.session.user }); // Redirige a la página de administración
  } else {
    res.redirect('/'); // Si no es admin, redirige al home o donde consideres
  }
});

module.exports = router;
