// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Sección izquierda */}
        <div className="footer-section">
          <h3>Enfermeros En Casa</h3>
          <p>Cuidando de ti y tu familia en la comodidad de tu hogar.</p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p><FaPhone /> +57 300 123 4567</p>
          <p><FaEnvelope /> contacto@enfermerosencasa.com</p>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
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
