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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tu PQRS fue enviada con éxito ✅");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section id="pqrs" className="pqrs">
      <h2>PQRS</h2>
      <form onSubmit={handleSubmit} className="pqrs-form">
        <input type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Tu correo" value={form.correo} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Escribe tu mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </section>
  );
}

export default Pqrs;
