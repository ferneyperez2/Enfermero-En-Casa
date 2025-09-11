import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importa los componentes de las páginas
import Home from "./components/pages/Home";
import ServicePage from "./components/pages/ServicePage";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Ruta dinámica para cada servicio */}
          <Route path="/services/:serviceName" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;