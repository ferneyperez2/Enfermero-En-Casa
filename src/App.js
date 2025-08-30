import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Appointment from "./components/Appointment";
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
        <News />
        <Pqrs />
      </div>

      <div>
      {/* Aquí tu contenido */}
      <Footer />

    </div>
    </div>
  );
}

export default App;
