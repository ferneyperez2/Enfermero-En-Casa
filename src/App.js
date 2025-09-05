import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Appointment from "./components/Appointment";
import ServicesTabs from "./components/ServicesTabs";
import News from "./components/News";
import Pqrs from "./components/Pqrs";
import Footer from "./components/Footer";
import MisionVision from "./components/MisionVision";
import NuestrasSedes from "./components/NuestrasSedes";
import AnimatedWrapper from './components/AnimatedWrapper';
import "./App.css";

function App() {
  return (
    <AnimatedWrapper>

    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <MisionVision />
        <NuestrasSedes />
        <ServicesTabs /> {/* ✅ Aquí agregamos los servicios */}
        <News />
        <Pqrs />
        <Appointment />
      </div>

      <Footer />
    </div>
    </AnimatedWrapper>
  );
}

export default App;
