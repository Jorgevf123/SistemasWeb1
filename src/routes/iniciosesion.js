const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

// Ruta de inicio de sesión
router.get('/', function (req, res, next) {
  const errorMessage = req.query.error || req.session.error || null;
  req.session.error = null; // Limpiar el error almacenado en la sesión

  res.render('iniciosesion', {
      title: 'Inicio de sesión',
      user: req.session.user,
      error: errorMessage, // Pasar el mensaje de error al renderizar
  });
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
      // Verificar si el usuario está baneado
      if (usuario.baneado) {
        req.session.error = "Tu cuenta ha sido baneada. No puedes iniciar sesión.";
        return res.redirect("/iniciosesion");
      }

      bcrypt.compare(contrasena, usuario.contrasena, (err, result) => {
        if (err) {
          console.error("Error al comparar contraseñas:", err);
          req.session.error = "Ocurrió un problema al verificar la contraseña.";
          return res.redirect("/iniciosesion");
        }

        if (result) {
          // Guardamos el usuario en la sesión
          req.session.user = {
            id: usuario.id,
            correo_electronico: usuario.correo_electronico,
            nombre: usuario.nombre,
            rol: usuario.es_admin ? 'admin' : 'user', // Definir el rol del usuario
            imagen_perfil: usuario.imagen_perfil,
            es_invitado: false,
            baneado: usuario.baneado, // Agregado para verificar en otras partes
          };

          req.session.message = "¡Inicio de sesión exitoso!";

          // Redirigir según si es administrador o no
          if (usuario.es_admin) {
            return res.redirect("/perfiladmin"); // Página de administrador
          } else {
            return res.redirect("/perfil"); // Página de usuario regular
          }
        } else {
          req.session.error = "Correo electrónico o contraseña incorrectos.";
          return res.redirect("/iniciosesion");
        }
      });
    } else {
      req.session.error = "Correo electrónico o contraseña incorrectos.";
      return res.redirect("/iniciosesion");
    }
  } catch (error) {
    console.error("Error al manejar el inicio de sesión:", error);
    req.session.error = "Hubo un problema con el servidor.";
    return res.redirect("/iniciosesion");
  }
});


module.exports = router;
