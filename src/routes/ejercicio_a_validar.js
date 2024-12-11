const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para cargar el ejercicio a validar
router.get('/', async (req, res) => {
    const ejercicioId = req.query.ejercicio_id;

    try {
        const ejercicio = await sequelize.models.Ejercicios.findByPk(ejercicioId);

        if (!ejercicio) {
            return res.status(404).send('Ejercicio no encontrado');
        }

        res.render('ejercicio_a_validar', { 
            title: 'Ejercicio a Validar',
            ejercicio, // Pasamos el ejercicio a la vista
        });
    } catch (error) {
        console.error('Error al cargar el ejercicio:', error);
        res.status(500).send('Error al cargar el ejercicio.');
    }
});






// Aceptar ejercicio
router.post('/aceptar', async (req, res) => {
    const { id } = req.body;

    try {
        await sequelize.models.Ejercicios.update(
            { aprobado: true },
            { where: { id } }
        );
        res.redirect('/ejercicios_supervisar'); // Redirige a la supervisión
    } catch (error) {
        console.error('Error al aceptar el ejercicio:', error);
        res.status(500).send('Error al aceptar el ejercicio');
    }
});

// Rechazar ejercicio
router.post('/rechazar', async (req, res) => {
    const { id } = req.body;

    try {
        await sequelize.models.Ejercicios.destroy({ where: { id } });
        res.redirect('/ejercicios_supervisar'); // Redirige a la supervisión
    } catch (error) {
        console.error('Error al rechazar el ejercicio:', error);
        res.status(500).send('Error al rechazar el ejercicio');
    }
});

module.exports = router;


