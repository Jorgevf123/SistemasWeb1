const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

// Renderiza la página de inicio de sesión
router.get('/', function (req, res, next) {
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
      // Verifica la contraseña
      bcrypt.compare(contrasena, usuario.contrasena, function (err, result) {
        if (result) {
          // Inicio de sesión exitoso
          req.session.user = {
            correo_electronico: usuario.correo_electronico,
            nombre: usuario.nombre,
            es_admin: usuario.es_admin,
            imagen_perfil: usuario.imagen_perfil, // Agrega la imagen de perfil
          };
          req.session.message = "¡Inicio de sesión exitoso!";
          console.log("Usuario autenticado:", req.session.user);

          // Redirección según tipo de usuario
          if (usuario.es_admin) {
            res.render('PerfilAdmin', { usuario: req.session.user });
          } else {
            res.render('perfil', { usuario: req.session.user });
          }
        } else {
          // Contraseña incorrecta
          console.log("Contraseña incorrecta para:", correoElectronico);
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          res.redirect("/iniciosesion");
        }
      });
    } else {
      // Usuario no encontrado
      console.log("Usuario no encontrado:", correoElectronico);
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      res.redirect("/iniciosesion");
    }
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error);
    res.status(500).send("Hubo un problema con el servidor.");
  }
});

// Ruta para la página de administración
router.get('/admin', function (req, res) {
  // Verificar que el usuario es admin
  if (req.session.user && req.session.user.es_admin) {
    res.render('PerfilAdmin', { usuario: req.session.user });
  } else if (req.session.user && !req.session.user.es_admin) {
    res.redirect('/perfil', { usuario: req.session.user });
  } else {
    res.redirect('/'); // Si no es admin, redirige al home o donde consideres
  }
});

// Ruta para perfil del usuario
router.get('/perfil', function (req, res) {
  if (req.session.user) {
    console.log("Perfil del usuario cargado:", req.session.user);
    res.render('perfil', { usuario: req.session.user });
  } else {
    res.redirect('/iniciosesion');
  }
});

module.exports = router;
