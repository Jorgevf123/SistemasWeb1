const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articulo_comunidad', { title: 'Artículo de la comunidad', user:req.session.user});
});

module.exports = router;