const express = require('express');
const router = express.Router();
const sequelize = require('../../sequelize')

// Añadir un artículo a favoritos
router.post('/add', async (req, res) => {
    const { articleId } = req.body;
    if (!articleId) {
        return res.status(400).json({ error: 'Faltan datos necesarios' });
    }

    try {
        const user = await sequelize.models.Usuario.findOne({ where: { nombre: req.session.user.nombre } });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        // Parsear el JSON de favoritos
        let favoritos = user.favoritos || [];
        if (typeof favoritos === 'string') {
            favoritos = JSON.parse(favoritos);
        }
        // Verificar si el artículo ya está en favoritos
        if (favoritos.includes(articleId)) {
          return res.status(200).json({ message: 'El artículo ya está en favoritos' });
      }
      // Añadir el artículo
      favoritos.push(articleId);
      // Actualizar en la base de datos
      await sequelize.models.Usuario.update(
        { favoritos: JSON.stringify(favoritos) },
        { where: { nombre: req.session.user.nombre } }
      );
      console.log(favoritos, articleId);
        res.status(200).json({ message: 'Artículo añadido a favoritos', favoritos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al añadir favorito' });
    }
});

// Eliminar un artículo de favoritos
router.post('/remove', async (req, res) => {
    let { articleId } = req.body;
    articleId = parseInt(articleId, 10);

    if (!articleId) {
        return res.status(400).json({ error: 'Faltan datos necesarios' });
    }

    try {
        // Buscar al usuario
        const user = await sequelize.models.Usuario.findOne({ where: { nombre: req.session.user.nombre } });
        if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        // Parsear el JSON de favoritos
        let favoritos = user.favoritos || [];
        if (typeof favoritos === 'string') {
            favoritos = JSON.parse(favoritos);
        }
        // Verificar si el artículo está en favoritos
        if (!favoritos.includes(articleId)) {
          return res.status(404).json({ error: 'El artículo no está en favoritos' });
        }
        // Eliminar el artículo
        favoritos = favoritos.filter(id => id !== articleId);
        // Actualizar en la base de datos
        await sequelize.models.Usuario.update(
          { favoritos: JSON.stringify(favoritos) },
          { where: { nombre: req.session.user.nombre } }
        );
        console.log(favoritos, articleId);
        res.status(200).json({ message: 'Artículo eliminado de favoritos', favoritos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar favorito' });
    }
});

module.exports = router;
