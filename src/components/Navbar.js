import React, { useState } from "react";
import logo from "./ENFERMEROS .png"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">Enfermeros En Casa</span>
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Inicio</a>
        <a href="#appointment">Agendar Cita</a>
        <a href="#services">Servicios</a>
        <a href="#news">Noticias</a>
        <a href="#pqrs">PQRS</a>
        <a href="#contact">Contacto</a>
      </div>

      {/* Botón menú móvil */}
      <div 
        className={`menu-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
