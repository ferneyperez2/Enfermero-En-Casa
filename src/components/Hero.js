import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Bienvenido a Enfermeros En Casa</h1>
        <p>Atención médica de calidad, al alcance de tu mano.</p>
        <a href="#appointment" className="btn-primary">Agendar cita</a>
      </div>
    </section>
  );
}

export default Hero;
