const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('../sequelize'); // Asegúrate de que el path sea correcto
const router = express.Router();

// Acceder correctamente al modelo Usuario
const Usuario = sequelize.models.Usuario; // Nombre correcto del modelo

// Mostrar la página de registro
router.get('/', (req, res) => {
    res.render('registro'); // Renderiza la plantilla `registro.ejs`
});

// Procesar el registro del usuario
router.post('/', async (req, res) => {
    const { correo_electronico, nombre, contrasena, confirm_password } = req.body;

    try {
        // Validar que las contraseñas coincidan
        if (contrasena !== confirm_password) {
            return res.status(400).send('Las contraseñas no coinciden.');
        }

        // Validar si el correo ya está registrado
        

        // Validar longitud y complejidad de la contraseña
        if (contrasena.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/g.test(contrasena)) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres y un carácter especial.');
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



