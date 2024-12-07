const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const usuario = req.session.user || null; // Asegúrate de que `user` no sea undefined
  res.render('conocenos' , { title: 'Conócenos', user:usuario, imagen_perfil:usuario ? usuario.imagen_perfil : '/images/avatar.webp'});
});

module.exports = router;
