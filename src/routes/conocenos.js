/*const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('conocenos'); // Renderiza la plantilla `rutina.ejs`
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('conocenos' , { title: 'Conócenos'});
});

module.exports = router;