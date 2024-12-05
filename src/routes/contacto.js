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

// Ruta para mostrar la página de contacto
router.get('/', (req, res) => {
    res.render('contacto', { 
        title: 'Contacto',
        layout: 'layout.ejs'
    });
});

// Ruta para procesar el formulario
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // El remitente es el correo ingresado en el formulario
        to: 'opinionesgymanual@gmail.com', // Tu correo donde recibirás los mensajes Gymanual2024
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`,
    };

    try {
        // Enviar el correo
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado correctamente');
        res.send('Gracias por tu mensaje. Te responderemos pronto.');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Hubo un error al enviar tu mensaje. Por favor, inténtalo más tarde.');
    }
});

module.exports = router;
