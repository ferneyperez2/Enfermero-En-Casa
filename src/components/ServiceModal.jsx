import React from "react";
import AppointmentForm from "./Appointment";
import "./ServiceModal.css";

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
        
        {/* Lógica para mostrar la imagen */}
        {service.image && (
          <div className="modal-image-container">
            <img 
              src={service.image} 
              alt={service.name} 
              className="modal-service-image" 
            />
          </div>
        )}
        
        {/* Aquí puedes agregar un icono si lo deseas */}
        {/* {service.icon && (
          <FontAwesomeIcon icon={service.icon} />
        )} */}

        <h3 className="modal-title">{service.name}</h3>
        <p className="modal-description">{service.description}</p>

        {/* Video */}
        {service.video && (
          <div className="video-container">
            <iframe
              src={service.video}
              title={`Video de ${service.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Beneficios */}
        {service.benefits && (
          <div className="modal-benefits">
            <h4>Beneficios:</h4>
            <ul>
              {service.benefits.map((b, i) => (
                <li key={i}>
                  <span className="benefit-icon">✅</span> {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Formulario de citas */}
        <div className="modal-form">
          <AppointmentForm serviceName={service.name} />
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;