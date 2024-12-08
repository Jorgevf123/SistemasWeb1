const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para el perfil del usuario
router.get('/', async function (req, res) {
  if (req.session.user) {  // Verificamos si hay un usuario en la sesión
    try {
      // Buscar la información del usuario en la base de datos
      const usuario = await sequelize.models.Usuario.findOne({
        where: { correo_electronico: req.session.user.correo_electronico }  // Asegúrate de usar el correo_electronico para la búsqueda
      });

      if (usuario) {
        // Verificar si el usuario es administrador
        if (usuario.es_admin) {
          // Si es administrador, redirigir a perfilAdmin.ejs
          res.render('perfilAdmin', { 
            title: 'Perfil del Administrador', 
            user: req.session.user, 
            imagen_perfil: usuario.imagen_perfil || "images/Fotoperfilpordefecto.png" 
          });
        } else {
          // Si no es administrador, redirigir a perfil.ejs
          res.render('perfil', { 
            title: 'Perfil del Usuario', 
            user: req.session.user, 
            imagen_perfil: usuario.imagen_perfil || "images/Fotoperfilpordefecto.png" 
          });
        }
      } else {
        // Si no se encuentra el usuario en la base de datos, mostramos una imagen por defecto
        res.render('perfil', { 
          title: 'Perfil del Usuario', 
          user: req.session.user, 
          imagen_perfil: "images/Fotoperfilpordefecto.png" 
        });
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      // Manejar errores (opcionalmente redirigir a una página de error)
      res.status(500).send('Hubo un error al cargar tu perfil.');
    }
  } else {
    // Si no hay un usuario en sesión, redirigir al inicio de sesión
    req.session.error = "Debes iniciar sesión para acceder a tu perfil.";
    res.redirect('/iniciosesion');
  }
});

 // Ruta para cerrar sesión
 router.get('/cerrar-sesion', (req, res) => {
  // Eliminar la sesión del usuario
  req.session.destroy((err) => {
      if (err) {
          console.error('Error al destruir la sesión:', err);
          return res.status(500).send('Hubo un error al cerrar sesión.');
      }

      // Redirigir al inicio de sesión
      res.redirect('/iniciosesion');
  });
});

module.exports = router;
