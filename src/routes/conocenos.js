const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('conocenos'); // Renderiza la plantilla `rutina.ejs`
});

module.exports = router;
