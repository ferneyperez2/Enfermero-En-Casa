import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Appointment from "./components/Appointment";
import ServicesTabs from "./components/ServicesTabs";
import News from "./components/News";
import Pqrs from "./components/Pqrs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <Appointment />
        <ServicesTabs /> {/* ✅ Aquí agregamos los servicios */}
        <News />
        <Pqrs />
      </div>

      <Footer />
    </div>
  );
}

export default App;
