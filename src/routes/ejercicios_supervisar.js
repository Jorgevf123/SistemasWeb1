const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

// Ruta para ejercicios a supervisar
router.get('/', async (req, res) => {
    try {
        const ejercicios = await sequelize.models.Ejercicios.findAll({
            where: { aprobado: false }, // Solo ejercicios no aprobados
        });

        res.render('ejercicios_supervisar', {
            title: 'Ejercicios a Supervisar',
            ejercicios, // Pasamos los ejercicios
        });
    } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
        res.status(500).send('Error al cargar los ejercicios.');
    }
});





// Ruta para manejar la validación de ejercicios de un usuario específico
router.get('/ejercicio_a_validar', async (req, res) => {
    const usuarioId = req.query.usuario_id;

    try {
        // Buscar usuario y ejercicios pendientes
        const usuario = await sequelize.models.Usuario.findByPk(usuarioId);
        const ejerciciosPendientes = await sequelize.models.Ejercicios.findAll({
            where: {
                autor: usuario.nombre, // Filtrar por el autor del ejercicio
                aprobado: false, // Solo ejercicios no aprobados
            },
        });

        if (!usuario || ejerciciosPendientes.length === 0) {
            return res.status(404).send('Ejercicio no encontrado o no hay ejercicios pendientes.');
        }

        // Asegúrate de pasar "title" al renderizar la vista
        res.render('ejercicio_a_validar', { 
            title: 'Ejercicio a Validar', 
            usuario, 
            ejercicios: ejerciciosPendientes 
        });
    } catch (error) {
        console.error('Error al cargar el ejercicio:', error);
        res.status(500).send('Error al cargar el ejercicio');
    }
});



module.exports = router;

