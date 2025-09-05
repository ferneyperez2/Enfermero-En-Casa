import React, { useState } from "react";
import "./Pqrs.css";

function Pqrs() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviamos los datos al backend
      const response = await fetch("http://localhost:5000/api/pqrs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Convertimos el objeto del formulario a JSON
      });

      if (response.ok) {
        // La petición fue exitosa (código 200)
        alert("Tu PQRS fue enviada con éxito ✅");
        setForm({ nombre: "", correo: "", mensaje: "" }); // Reseteamos el formulario
      } else {
        // Hubo un error en el servidor
        alert("Hubo un error ❌, inténtalo nuevamente.");
      }
    } catch (error) {
      // Error de red, el servidor no responde
      console.error("Error al conectar con el servidor:", error);
      alert("No se pudo conectar con el servidor. Por favor, inténtalo más tarde.");
    }
  };

  return (
    <section id="pqrs" className="pqrs">
      <h2>PQRS</h2>
      <form onSubmit={handleSubmit} className="pqrs-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={form.correo}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows="4"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Pqrs;