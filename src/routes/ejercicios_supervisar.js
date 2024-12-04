const express = require('express');
const router = express.Router();

// Ruta para ejercicios a supervisar
router.get('/', (req, res) => {
    // Renderiza la vista ejercicios_supervisar.ejs
    res.render('ejercicios_supervisar', { title: 'Ejercicios a Supervisar' });
});

module.exports = router;
