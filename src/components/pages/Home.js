import React from "react";

// Importa todos los componentes de la página de inicio
import Hero from '../Hero';
import MisionVision from '../MisionVision';
import NuestrasSedes from '../NuestrasSedes'
import ServicesTabs from "../ServicesTabs";
import News from "../News";
import Pqrs from '../Pqrs'
import Appointment from "../Appointment";
import Contact from "../Contact";

const Home = () => (
  <main className="content">
    <Hero />
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
);

export default Home;