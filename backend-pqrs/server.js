const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// --- Configuración SMTP con ColombiaHosting ---
const transporter = nodemailer.createTransport({
    // 1. Verifica este host en cPanel
    host: 'mail.ipsenfermerosencasa.com', 
    // 2. Verifica este puerto en cPanel
    port: 465, 
    // 3. Verifica si se usa SSL. Si el puerto es 465, esto es correcto.
    secure: true, 
    auth: {
        // 4. Verifica que este usuario esté escrito exactamente igual
        user: 'pqrs@ipsenfermerosencasa.com', 
        // 5. Verifica que esta contraseña esté escrita exactamente igual
        pass: 'Enfermeros1!' 
    },
    tls: {
        rejectUnauthorized: false
    }
});

// --- Ruta para manejar PQRS ---
app.post('/api/pqrs', async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const mailOptions = {
        from: `"${nombre}" <pqrs@ipsenfermerosencasa.com>`,
        to: 'pqrs@ipsenfermerosencasa.com',
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
        console.log('✅ Correo enviado con éxito a pqrs@ipsenfermerosencasa.com');
        res.status(200).json({ message: 'El mensaje ha sido enviado correctamente.' });
    } catch (error) {
        console.error('❌ Error al enviar el correo:', error);
        res.status(500).json({ error: 'Hubo un error al procesar tu solicitud.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});