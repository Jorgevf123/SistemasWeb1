const express = require('express');
const router = express.Router();

router.get('/elegir', (req, res) => {
    res.render('elegir', { usuario: req.user });
});

module.exports = router;
