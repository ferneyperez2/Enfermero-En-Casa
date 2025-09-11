import React, { useState } from "react";
import logo from "./ENFERMEROS .png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <div className="navbar-logo-container">
        <a href="#home" className="navbar-logo-link" onClick={closeMenu}>
          <img src={logo} alt="IPS Enfermeros En Casa Logo" className="logo-image" />
          <span className="logo-text">Enfermeros En Casa</span>
        </a>
      </div>

      {/* Menú de navegación */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Inicio</a>
        <a href="#appointment" onClick={closeMenu}>Agendar Cita</a>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#news" onClick={closeMenu}>Noticias</a>
        <a href="#pqrs" onClick={closeMenu}>SIAU</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </div>

      {/* Botón para menú móvil */}
      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        aria-label="Toggle navigation menu"
      >
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;