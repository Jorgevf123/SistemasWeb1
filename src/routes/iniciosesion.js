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

          // Redirigimos al perfil según el tipo de usuario
          if (usuario.es_admin) {
            res.redirect('/perfil');  // Redirige al perfil del admin
          } else {
            res.redirect('/perfil');  // Redirige al perfil del usuario normal
          }
        } else {
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          res.redirect("/iniciosesion");  // Redirige con error y recarga
        }
      });
    } else {
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      res.redirect("/iniciosesion");  // Redirige con error y recarga
    }
  } catch (error) {
    res.status(500).send("Hubo un problema con el servidor.");
  }
});

// Ruta para actualizar la imagen de perfil
router.post('/update-image', async (req, res) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ success: false, message: 'No se ha enviado ninguna imagen.' });
  }

  try {
    // Obtener el usuario actual de la sesión
    const usuario = await sequelize.models.Usuario.findOne({
      where: { correo_electronico: req.session.user.correo_electronico }
    });

    if (usuario) {
      // Actualiza la imagen de perfil en la base de datos
      usuario.imagen_perfil = image;
      await usuario.save();

      // Actualizamos la sesión con la nueva imagen
      req.session.user.imagen_perfil = image;
      res.json({ success: true, message: 'Imagen de perfil actualizada correctamente.' });

      // Redirigir al perfil con recarga
      res.redirect('/perfil');  // Redirige con recarga a la página del perfil
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
    }
  } catch (error) {
    console.error('Error al actualizar la imagen:', error);
    res.status(500).json({ success: false, message: 'Error al actualizar la imagen de perfil.' });
  }
});

// Ruta para el perfil del usuario
router.get('/perfil', function (req, res) {
  // Verificamos si hay un usuario en la sesión
  if (req.session.user) {
    // Si está logueado, renderizamos la página del perfil
    res.render('perfil', { usuario: req.session.user });
  } else {
    // Si no hay un usuario en sesión, redirigimos al inicio de sesión
    req.session.error = "Debes iniciar sesión para acceder a tu perfil.";
    res.redirect('/iniciosesion');
  }
});

// Ruta para cerrar sesión
router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).send("Hubo un problema al cerrar sesión.");
    }
    res.redirect('/iniciosesion');
  });
});

module.exports = router;
