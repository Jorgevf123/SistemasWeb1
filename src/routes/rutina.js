const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('rutina'); // Renderiza la plantilla `rutina.ejs`
});

module.exports = router;
