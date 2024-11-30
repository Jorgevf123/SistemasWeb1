const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('ejercicios'); // Renderiza la plantilla `ejercicios.ejs`
});

module.exports = router;
