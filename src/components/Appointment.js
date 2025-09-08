// // src/components/Appointment.js
// import React, { useState } from "react";
// import { FaCalendarAlt, FaUserMd, FaWhatsapp } from "react-icons/fa";
// import "./Appointment.css";

// function Appointment() {
//   const [form, setForm] = useState({
//     name: "",
//     specialty: "",
//     eps: "",
//     phone: "",
//     regimen: "",
//     date: "",
//     time: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validación simple
//     if (!form.name || !form.specialty || !form.eps || !form.phone || !form.regimen || !form.date || !form.time) {
//       alert("Por favor completa todos los campos.");
//       return;
//     }

//     const mensaje = `👩‍⚕️ *Solicitud de cita médica*%0A
// 📌 Nombre: ${form.name}%0A
// 📌 Especialidad: ${form.specialty}%0A
// 🏥 EPS: ${form.eps}%0A
// 📋 Régimen: ${form.regimen}%0A
// 📅 Fecha: ${form.date} ${form.time}%0A
// 📞 Teléfono: ${form.phone}`;

//     const url = `https://wa.me/573218514930?text=${mensaje}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <section className="appointment" id="appointment">
//       <h2 className="title">
//         <FaCalendarAlt className="icon" /> Agendar Cita
//       </h2>
//       <p className="subtitle">
//         Agenda tu cita con nuestros <FaUserMd className="inline-icon" /> profesionales de enfermería en pocos pasos.
//       </p>

//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Nombre del Paciente</label>
//           <input type="text" id="name" placeholder="Ingresa el nombre completo" value={form.name} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="specialty">Especialidad</label>
//           <select id="specialty" value={form.specialty} onChange={handleChange} required>
//             <option value="">Selecciona la especialidad</option>
//             <option value="Medicina General">Medicina General</option>
//             <option value="Pediatría">Pediatría</option>
//             <option value="Enfermería">Enfermería</option>
//             <option value="Odontología">Odontología</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="eps">EPS</label>
//           <input type="text" id="eps" placeholder="Ingresa la EPS del paciente" value={form.eps} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Teléfono</label>
//           <input type="tel" id="phone" placeholder="Ingresa el teléfono del paciente" value={form.phone} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="regimen">Régimen</label>
//           <select id="regimen" value={form.regimen} onChange={handleChange} required>
//             <option value="">Selecciona el régimen</option>
//             <option value="Contributivo">Contributivo</option>
//             <option value="Subsidiado">Subsidiado</option>
//             <option value="Particular">Particular</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="date">Día de la Cita</label>
//           <input type="date" id="date" value={form.date} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="time">Hora</label>
//           <input type="time" id="time" value={form.time} onChange={handleChange} required />
//         </div>

//         <button type="submit" className="btn">
//           <FaCalendarAlt className="btn-icon" /> Reservar Cita
//         </button>
//       </form>

//       <div className="whatsapp">
//         <a href="https://wa.me/573218514930" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp className="whatsapp-icon" /> Contáctanos por WhatsApp
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Appointment;


import React, { useState } from "react";
import { FaCalendarAlt, FaUserMd, FaWhatsapp } from "react-icons/fa";
import "./Appointment.css";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    eps: "",
    phone: "",
    regimen: "",
    date: "",
    time: ""
  });

  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validación del formulario
    const isFormValid = Object.values(form).every(value => value.trim() !== "");
    if (!isFormValid) {
      setMessage({ type: "error", text: "Por favor, completa todos los campos." });
      setIsSubmitting(false);
      return;
    }

    const encodedMessage = `*Nueva Solicitud de Cita Médica*%0A
*Nombre:* ${form.name}%0A
*Especialidad:* ${form.specialty}%0A
*EPS:* ${form.eps}%0A
*Régimen:* ${form.regimen}%0A
*Fecha y Hora:* ${form.date} ${form.time}%0A
*Teléfono:* ${form.phone}`;

    const whatsappUrl = `https://wa.me/573218514930?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Limpiar formulario y mostrar mensaje de éxito
    setForm({
      name: "",
      specialty: "",
      eps: "",
      phone: "",
      regimen: "",
      date: "",
      time: ""
    });
    setMessage({ type: "success", text: "✅ ¡Cita agendada! Revisa tu WhatsApp." });
    setIsSubmitting(false);
  };

  return (
    <section className="appointment" id="appointment">
      <h2 className="title">
        <FaCalendarAlt className="icon" /> Agendar Cita
      </h2>
      <p className="subtitle">
        Agenda tu cita con nuestros <FaUserMd className="inline-icon" /> profesionales de enfermería en pocos pasos.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre del Paciente</label>
          <input type="text" id="name" name="name" placeholder="Ingresa el nombre completo" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="specialty">Especialidad</label>
          <select id="specialty" name="specialty" value={form.specialty} onChange={handleChange} required>
            <option value="">Selecciona la especialidad</option>
            <option value="Medicina General">Medicina General</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Enfermería">Enfermería</option>
            <option value="Odontología">Odontología</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="eps">EPS</label>
          <input type="text" id="eps" name="eps" placeholder="Ingresa la EPS del paciente" value={form.eps} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" placeholder="Ingresa el teléfono del paciente" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="regimen">Régimen</label>
          <select id="regimen" name="regimen" value={form.regimen} onChange={handleChange} required>
            <option value="">Selecciona el régimen</option>
            <option value="Contributivo">Contributivo</option>
            <option value="Subsidiado">Subsidiado</option>
            <option value="Particular">Particular</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Día de la Cita</label>
          <input type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Hora</label>
          <input type="time" id="time" name="time" value={form.time} onChange={handleChange} required />
        </div>

        {message && (
          <p className={`form-message ${message.type}`}>
            {message.text}
          </p>
        )}

        <button 
          type="submit" 
          className="btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Reservar Cita"}
        </button>
      </form>

      <div className="whatsapp-contact">
        <a href="https://wa.me/573218514930" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" /> Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Appointment;