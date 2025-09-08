import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css"; 

function Contact() {
  return (
    <section id="contacto" className="contacto-section">
      <h2 className="section-title">Nuestros Contactos</h2>
      <div className="contact-details-container">
        <div className="contact-info">
          <p className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:pqrs@ipsenfermerosencasa.com" className="contact-link">
              pqrs@ipsenfermerosencasa.com
            </a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+573234266081" className="contact-link">
              +57 323 4266081
            </a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
            <a href="https://wa.me/573234266081" target="_blank" rel="noopener noreferrer" className="contact-link">
              Enviar un mensaje por WhatsApp
            </a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            Cl. Antioquia #14-77, Montelibano, Montelíbano, Córdoba
          </p>
        </div>
        
        <div className="google-map-container">
          <iframe
            title="Ubicación de la clínica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1975885048328!2d-75.42030932428133!3d7.9785187045456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5b1327bbe04c63%3A0x9f3347f68a649903!2sIPS%20Enfermeros%20En%20Casa%20Montel%C3%ADbano!5e0!3m2!1ses-419!2sco!4v1757346245986!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;