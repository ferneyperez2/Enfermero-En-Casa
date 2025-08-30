// src/components/Appointment.js
import React from "react";
import { FaCalendarAlt, FaUserMd, FaWhatsapp, FaPhone, FaHospital } from "react-icons/fa";
import "./Appointment.css";

function Appointment() {
  return (
    <section className="appointment" id="appointment">
      <h2 className="title">
        <FaCalendarAlt className="icon" /> Agendar Cita
      </h2>
      <p className="subtitle">
        Agenda tu cita con nuestros <FaUserMd className="inline-icon" /> profesionales de enfermería en pocos pasos.
      </p>

      <form className="appointment-form">
        {/* Nombre del paciente */}
        <div className="form-group">
          <label htmlFor="name">Nombre del Paciente</label>
          <input type="text" id="name" placeholder="Ingresa el nombre completo" required />
        </div>

        {/* Especialidad */}
        <div className="form-group">
          <label htmlFor="specialty">Especialidad</label>
          <select id="specialty" required>
            <option value="">Selecciona la especialidad</option>
            <option value="general">Medicina General</option>
            <option value="pediatria">Pediatría</option>
            <option value="enfermeria">Enfermería</option>
            <option value="odontologia">Odontología</option>
          </select>
        </div>

        {/* EPS */}
        <div className="form-group">
          <label htmlFor="eps">EPS</label>
          <input type="text" id="eps" placeholder="Ingresa la EPS del paciente" required />
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" placeholder="Ingresa el teléfono del paciente" required />
        </div>

        {/* Régimen */}
        <div className="form-group">
          <label htmlFor="regimen">Régimen</label>
          <select id="regimen" required>
            <option value="">Selecciona el régimen</option>
            <option value="contributivo">Contributivo</option>
            <option value="subsidiado">Subsidiado</option>
            <option value="particular">Particular</option>
          </select>
        </div>

        {/* Fecha de la cita */}
        <div className="form-group">
          <label htmlFor="date">Día de la Cita</label>
          <input type="date" id="date" required />
        </div>

        {/* Hora */}
        <div className="form-group">
          <label htmlFor="time">Hora</label>
          <input type="time" id="time" required />
        </div>

        <button type="submit" className="btn">
          <FaCalendarAlt className="btn-icon" /> Reservar Cita
        </button>
      </form>

      {/* Botón de WhatsApp */}
      <div className="whatsapp">
        <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" /> Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Appointment;
