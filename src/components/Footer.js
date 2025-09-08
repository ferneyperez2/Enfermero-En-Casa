import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Sección de la empresa */}
        <div className="footer-section footer-about">
          <h3 className="footer-title">Enfermeros En Casa</h3>
          <p className="footer-description">
            Cuidando de ti y tu familia con el mejor servicio de enfermería a domicilio.
          </p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-section footer-contact">
          <h4 className="footer-title">Contacto</h4>
          <ul className="contact-list">
            <li>
              <a href="tel:+573001234567">
                <FaPhone className="icon" /> +57 300 123 4567
              </a>
            </li>
            <li>
              <a href="mailto:contacto@enfermerosencasa.com">
                <FaEnvelope className="icon" /> contacto@enfermerosencasa.com
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-section footer-social">
          <h4 className="footer-title">Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Enfermeros En Casa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;