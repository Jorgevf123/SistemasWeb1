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
          req.session.user = {
            correo_electronico: usuario.correo_electronico,
            nombre: usuario.nombre,
            es_admin: usuario.es_admin,
            imagen_perfil: usuario.imagen_perfil,
          };
          req.session.message = "¡Inicio de sesión exitoso!";

          if (usuario.es_admin) {
            // Redirigir al perfil admin con recarga
            res.redirect('/iniciosesion');  // Redirige con recarga a la página de inicio de sesión
          } else {
            // Redirigir al perfil de usuario con recarga
            res.redirect('/iniciosesion');  // Redirige con recarga a la página de inicio de sesión
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

            // Responder con éxito y redirigir al origen
            req.session.user.imagen_perfil = image;  // Actualizamos la sesión con la nueva imagen
            res.json({ success: true, message: 'Imagen de perfil actualizada correctamente.' });

            // Redirigir al perfil con recarga
            res.redirect('/iniciosesion');  // Redirige con recarga a la página de inicio de sesión
        } else {
            res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
        }
    } catch (error) {
        console.error('Error al actualizar la imagen:', error);
        res.status(500).json({ success: false, message: 'Error al actualizar la imagen de perfil.' });
    }
});

// Otras rutas relacionadas con el perfil y la administración
router.get('/perfil', function (req, res) {
  if (req.session.user) {
    res.render('perfil', { usuario: req.session.user });
  } else {
    res.redirect('/iniciosesion');
  }
});

module.exports = router;
