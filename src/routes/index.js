const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const usuario = req.session.user || null; // Asegúrate de que `user` no sea undefined
  res.render('index' , { title: 'Página Principal', user:usuario, imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp' // Imagen predeterminada si no hay usuario});
});
});

module.exports = router;