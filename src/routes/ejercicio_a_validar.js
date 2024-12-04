const express = require('express');
const router = express.Router();

// Ruta para ejercicio a validar
router.get('/', (req, res) => {
    // Renderiza la vista ejercicio_a_validar.ejs
    res.render('ejercicio_a_validar', { title: 'Ejercicio a Validar' });
});

module.exports = router;
