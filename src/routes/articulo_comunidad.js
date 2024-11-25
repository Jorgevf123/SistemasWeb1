const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articulo_comunidad', { title: 'Artículo de la comunidad',
                                    user:req.session.user, 
                                    titulo_articulo:'Título 1', 
                                    imagen_articulo:'/images/img1.jpg', 
                                    usuario_escritor:'Usuario 1', 
                                    descripcion:'Descripcion'
                                  });
});

module.exports = router;