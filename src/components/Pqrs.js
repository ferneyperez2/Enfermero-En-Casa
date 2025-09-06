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
      const response = await fetch("http://localhost:5000/api/pqrs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("✅ Tu PQRS fue enviada con éxito");
        setForm({ nombre: "", correo: "", mensaje: "" });
      } else {
        alert("❌ Hubo un error en el servidor, inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("⚠️ No se pudo conectar con el servidor.");
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
