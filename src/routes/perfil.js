const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para el perfil del usuario
router.get('/', function (req, res) {
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
  
        // Solo enviamos una respuesta, no más de una.
        return res.json({ success: true, message: 'Imagen de perfil actualizada correctamente.' });
        
        // Redirigir o recargar la página no debe hacerse después de enviar la respuesta
      } else {
        return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
      }
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la imagen de perfil.' });
    }
  });
  
module.exports = router;

