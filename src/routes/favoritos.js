const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
      let total_items = 0;
      let articulosProcesados = [];
      const nombre_articulos = await sequelize.models.Usuario.findOne({
        where: {nombre: req.session.user.nombre}
      });
      if(nombre_articulos && nombre_articulos.favoritos){
        const favoritos = JSON.parse(nombre_articulos.favoritos || "[]");
        if (favoritos.length > 0) {
        const articulos = await sequelize.models.articulos_comunidad.findAll({
        where: {id: favoritos}
        });
        total_items = articulos.length;
        articulosProcesados = articulos.map((articulo) => {
        let imagenBase64 = '';
        if (articulo.imagen_articulo) {
          imagenBase64 = articulo.imagen_articulo.toString('base64');
        }
        return{
          id: articulo.id,
          titulo_articulo: articulo.titulo_articulo, 
          imagen_articulo: `data:image/jpeg;base64,${imagenBase64}`,
          usuario_escritor: articulo.usuario_escritor, 
          descripcion: articulo.descripcion,
          numero_likes: articulo.numero_like,
          numero_dislikes: articulo.numero_dislike,
          pagina_enlaces: `articulo_comunidad/${articulo.id}`, 
        }
        });
      }
      }
      res.render('favoritos', { title: 'Favoritos',
                                user: req.session.user, 
                                numero_carrusel:0,
                                total_items,
                                articulos: articulosProcesados,
                                usuarioFavoritos: nombre_articulos.favoritos,

      });
    }catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las noticias');
    }
});

module.exports = router;