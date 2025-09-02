import React from "react";
import AppointmentForm from "../components/Appointment";

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{service.name}</h3>
        <p>{service.description}</p>

        {/* Video */}
        <div className="video-container">
          <iframe
            src={service.video}
            title={service.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Beneficios */}
        <ul className="benefits">
          {service.benefits.map((b, i) => (
            <li key={i}>✅ {b}</li>
          ))}
        </ul>

        {/* Formulario de citas */}
        <AppointmentForm serviceName={service.name} />

        <button onClick={onClose} className="close-btn">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ServiceModal;
