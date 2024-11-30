const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
      const articulos = await sequelize.models.articulos_comunidad.findAll();
      const total_items = await sequelize.models.articulos_comunidad.count();
      const articulosProcesados = articulos.map((articulo) => {
        let imagenBase64 = '';
        if (articulo.imagen_articulo) {
          imagenBase64 = articulo.imagen_articulo.toString('base64');
        }
        return{
          titulo_articulo: articulo.titulo_articulo, 
          imagen_articulo: `data:image/jpeg;base64,${imagenBase64}`,
          usuario_escritor: articulo.usuario_escritor, 
          descripcion: articulo.descripcion,
          numero_likes: articulo.numero_like,
          numero_dislikes: articulo.numero_dislike,
          pagina_enlaces: `articulo_comunidad/${articulo.id}`,
        }
        
      });
      res.render('comunidad', { title: 'Comunidad',
                                user:req.session.user, 
                                total_items: total_items.length ,
                                articulos: articulosProcesados,
      });
    }catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las noticias');
    }
});

module.exports = router;