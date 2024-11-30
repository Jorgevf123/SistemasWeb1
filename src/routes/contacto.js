/*const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('contacto'); // Renderiza la plantilla `rutina.ejs`
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contacto', { 
        title: 'Contacto',
        layout: 'layout.ejs'
    });
});

module.exports = router;

