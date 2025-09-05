const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailgunTransport = require('nodemailer-mailgun-transport');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// --- Configuración de Nodemailer con Mailgun ---
const auth = {
    auth: {
        // Pega aquí la clave API privada que copiaste de tu panel de Mailgun.
        api_key: 'TU_CLAVE_API_CORRECTA', 
        // Pega aquí tu dominio de sandbox, exactamente como aparece en Mailgun.
        domain: 'http://ipsenfermerosencasa.com' 
    }
};

const transporter = nodemailer.createTransport(mailgunTransport(auth));

// --- Ruta para manejar el formulario PQRS ---
app.post('/api/pqrs', async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const mailOptions = {
        // El correo del remitente DEBE ser un correo de tu dominio de sandbox.
        from: `"${nombre}" <test@tu_dominio_de_sandbox_correcto.mailgun.org>`,
        to: 'enfermerosencasapqr@gmail.com',
        subject: `Nuevo PQRS de: ${nombre}`,
        html: `
            <h3>Formulario de Petición, Queja, Reclamo, Sugerencia</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado con éxito.');
        res.status(200).json({ message: 'El mensaje ha sido enviado correctamente.' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Hubo un error al procesar tu solicitud.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});