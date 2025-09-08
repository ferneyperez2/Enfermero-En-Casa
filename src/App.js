import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MisionVision from "./components/MisionVision";
import NuestrasSedes from "./components/NuestrasSedes";
import ServicesTabs from "./components/ServicesTabs";
import News from "./components/News";
import Pqrs from "./components/Pqrs";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
      once: true,     // La animación solo se ejecuta una vez por scroll
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <main className="content">
        <div data-aos="fade-up">
          <MisionVision />
        </div>

        <div data-aos="fade-up">
          <NuestrasSedes />
        </div>

        <div data-aos="fade-up">
          <ServicesTabs />
        </div>

        <div data-aos="fade-up">
          <News />
        </div>

        <div data-aos="fade-up">
          <Pqrs />
        </div>

        <div data-aos="fade-up">
          <Appointment />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;