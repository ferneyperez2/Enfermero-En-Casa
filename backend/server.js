// server.js
'use strict';
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 📩 Ruta para recibir PQRS
app.post('/api/pqrs', async (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body;

    // ⚡ Configuración del transportador (puede ser Gmail u otro servicio SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // correo remitente
        pass: process.env.EMAIL_PASS, // contraseña o app password
      },
    });

    // ⚡ Estructura del correo
    await transporter.sendMail({
      from: `"PQRS Clínica" <${process.env.EMAIL_USER}>`,
      to: "pqrs@clinica.com", // correo oficial donde llegan PQRS
      subject: `Nuevo PQRS de ${nombre}`,
      text: `
        Nombre: ${nombre}
        Correo: ${correo}
        Mensaje: ${mensaje}
      `,
      html: `
        <h3>Nuevo PQRS</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });

    res.json({ success: true, message: 'PQRS enviada con éxito ✅' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al enviar el PQRS ❌' });
  }
});

// 🚀 Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
