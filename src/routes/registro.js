const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('../sequelize'); // Asegúrate de que el path sea correcto
const router = express.Router();

// Acceder correctamente al modelo Usuario
const Usuario = sequelize.models.Usuario; // Nombre correcto del modelo

// Ruta para la página de registro
router.get('/', async (req, res) => {
    try {
        let esAdmin = false; // Por defecto, no es administrador
        let imagen_perfil = "images/Fotoperfilpordefecto.png"; // Imagen predeterminada

        if (req.session.user) { // Si hay un usuario en sesión
            const usuario = await sequelize.models.Usuario.findOne({
                where: { correo_electronico: req.session.user.correo_electronico }
            });

            if (usuario) {
                if (usuario.es_admin) {
                    esAdmin = true;
                } else {
                    esAdmin = false;
                }
                imagen_perfil = usuario.imagen_perfil || imagen_perfil; // Usamos la imagen del usuario si existe
            }
        }

        // Renderizamos la vista de registro
        res.render('registro', { 
            title: 'Página de Registro',
            user: req.session.user || null,
            imagen_perfil,
            esAdmin
        });
    } catch (error) {
        console.error('Error al cargar la página de registro:', error);
        res.status(500).send('Hubo un error al cargar la página de registro.');
    }
});


// Procesar el registro del usuario
router.post('/', async (req, res) => {
    const { correo_electronico, nombre, contrasena, confirm_password, aceptar_terminos } = req.body;

    try {
        // Validar que las contraseñas coincidan
        if (contrasena !== confirm_password) {
            return res.status(400).send('Las contraseñas no coinciden.');
        }

        // Validar longitud y complejidad de la contraseña
        if (contrasena.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/g.test(contrasena)) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres y un carácter especial.');
        }

        // Validar si el usuario ha aceptado los términos y condiciones
        if (!aceptar_terminos) {
            return res.status(400).send('Debes aceptar los Términos y Condiciones para registrarte.');
        }

        // Encriptar la contraseña
        const hash = await bcrypt.hash(contrasena, 10);

        // Crear el usuario en la base de datos
        await Usuario.create({
            correo_electronico,
            nombre,
            contrasena: hash,
        });

        // Redirigir al inicio de sesión tras registrarse
        res.status(201).redirect('/iniciosesion');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Hubo un error al registrar el usuario.');
    }
});

module.exports = router;
