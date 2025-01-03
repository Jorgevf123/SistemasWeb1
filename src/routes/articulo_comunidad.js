const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize')
const path = require('path');

router.get('/:id', async function(req, res, next) {
  try {
    let favoritos ={};
    let imagen_perfil = 'images/Fotoperfilpordefecto.png';
    const usuario = req.session.user;
    const articulo = await sequelize.models.articulos_comunidad.findOne({where: {id: req.params.id}});
    if (!articulo) {
      return res.status(404).send('Artículo no encontrado');
    }
    if(usuario){
      favoritos = await sequelize.models.Usuario.findOne({
        where: {nombre: usuario.nombre}
      }); 
    }
    let imagenBase64 = '';
    if (articulo.imagen_articulo) {
      imagenBase64 = articulo.imagen_articulo.toString('base64');
    } 
    if(favoritos.imagen_perfil){
      console.log(typeof(favoritos.imagen_perfil))
      imagen_perfil = path.join('../', favoritos.imagen_perfil); 
    }
    res.render('articulo_comunidad', { title: 'Artículo de la comunidad',
                                    user:usuario ? usuario : false, 
                                    id: articulo.id,
                                    titulo_articulo: articulo.titulo_articulo, 
                                    imagen_articulo: `data:image/jpeg;base64,${imagenBase64}`,
                                    usuario_escritor: articulo.usuario_escritor, 
                                    descripcion: articulo.descripcion,
                                    likes: articulo.numero_like,
                                    dislikes: articulo.numero_dislike,
                                    categoria: articulo.categoria,
                                    pageData: req.params.id,
                                    usuarioFavoritos : favoritos.favoritos,
                                    imagen_perfil: imagen_perfil,
                                  });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las noticias');
  }
});

module.exports = router;