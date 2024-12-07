const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Servidor SMTP de Outlook
  port: 587, // Puerto SMTP seguro
  secure: false, // Usa STARTTLS
  auth: {
    user: "810d81001@smtp-brevo.com", // Tu correo electrónico de Outlook
    pass: "LMQygBSR7zGn6wfI", // Tu contraseña de Outlook o contraseña de aplicación
    },
});
router.get('/', (req, res) => {
    const usuario = req.session.user || null;
    res.render('contacto', {
        title: 'Contacto',
        user: usuario,
        imagen_perfil: usuario ? usuario.imagen_perfil : '/images/avatar.webp'
    });
});

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: 'opinionesgymanual@gmail.com',
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`
        });
        res.render('respuesta_contacto', {
            title: 'Mensaje Enviado',
            mensaje: 'Gracias por tu mensaje. Te responderemos pronto.',
            volverUrl: '/contacto'
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).render('respuesta_contacto', {
            title: 'Error al Enviar',
            mensaje: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo más tarde.',
            volverUrl: '/contacto'
        });
    }
});



module.exports = router;
