const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para el perfil del usuario
// Ruta para el perfil del usuario
router.get('/', async function (req, res) {
  if (req.session.user) {  // Verificamos si hay un usuario en la sesión
    try {
      // Buscar la información del usuario en la base de datos
      const usuario = await sequelize.models.Usuario.findOne({
        where: { correo_electronico: req.session.user.correo_electronico }  // Asegúrate de usar el correo_electronico para la búsqueda
      });

      if (usuario) {
        // Renderizar el perfil con la información del usuario
        res.render('perfil', { 
          title: 'Perfil del Usuario', 
          user: req.session.user, 
          imagen_perfil: usuario.imagen_perfil || "images/Fotoperfilpordefecto.png" 
        });
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

