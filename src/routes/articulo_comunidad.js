const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize')

router.get('/:id', async function(req, res, next) {
  try {
    const articulo = await sequelize.models.articulos_comunidad.findOne({where: {id: req.params.id}});
    if (!articulo) {
      return res.status(404).send('Artículo no encontrado');
    }
    let imagenBase64 = '';
    if (articulo.imagen_articulo) {
      imagenBase64 = articulo.imagen_articulo.toString('base64');
    }
    res.render('articulo_comunidad', { title: 'Artículo de la comunidad',
                                    user:req.session.user, 
                                    titulo_articulo: articulo.titulo_articulo, 
                                    imagen_articulo: `data:image/jpeg;base64,${imagenBase64}`,
                                    usuario_escritor: articulo.usuario_escritor, 
                                    descripcion: articulo.descripcion,
                                    likes: articulo.numero_like,
                                    dislikes: articulo.numero_dislike
                                  });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las noticias');
  }
});

module.exports = router;