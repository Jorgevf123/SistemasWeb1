const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async function(req, res, next) {
  res.render('articulo_comunidad_editable', {title: 'Artículo de la comunidad', user:req.session.user});
});
router.post('/', upload.single('imagen_articulo'), async (req, res) => {
  try {
    const { categoria, titulo_articulo, descripcion } = req.body;
    const imagen_articulo = req.file ? req.file.buffer : null; 
   //const usuario_escritor = req.session.user.name;
   const usuario_escritor = "Carlos ramos";

    await sequelize.models.articulos_comunidad.create({
      categoria,
      titulo_articulo,
      usuario_escritor,
      descripcion,
      imagen_articulo,  
    });

    res.redirect('/comunidad');

  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el artículo');
  }
});

module.exports = router;