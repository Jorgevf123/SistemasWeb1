/*const express = require('express');
const router = express.Router();

// Ruta principal para las rutinas
router.get('/', (req, res) => {
    res.render('registro'); // Renderiza la plantilla `rutina.ejs`
});

module.exports = router;
*/

const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('../sequelize'); // Asegúrate de que el path sea correcto
const router = express.Router();

const Usuario = sequelize.models.usuarios;

// Mostrar la página de registro
router.get('/', (req, res) => {
    res.render('registro'); // Renderiza la plantilla `registro.ejs`
});

// Procesar el registro del usuario
router.post('/', async (req, res) => {
    const { correo_electronico, nombre, contrasena } = req.body;

    try {
        // Validar si el correo ya está registrado
        const usuarioExistente = await Usuario.findOne({ where: { correo_electronico } });
        if (usuarioExistente) {
            return res.status(400).send('El correo electrónico ya está registrado.');
        }

        // Encriptar la contraseña
        const hash = await bcrypt.hash(contrasena, 10);

        // Crear el usuario en la base de datos
        await Usuario.create({
            correo_electronico,
            nombre,
            contrasena: hash,
        });

        res.status(201).redirect('/iniciosesion'); // Redirigir al inicio de sesión tras registrarse
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Hubo un error al registrar el usuario.');
    }
});

module.exports = router;


