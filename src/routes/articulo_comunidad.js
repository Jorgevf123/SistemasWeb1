const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articulo_comunidad', { title: 'About us'});
});

module.exports = router;