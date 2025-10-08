
import React, { useState } from "react";
import {
  FaStethoscope,
  FaClinicMedical,
  FaMicroscope,
} from "react-icons/fa";
import "./Services.css";

// ✅ Aquí centralizamos TODOS los servicios
const servicesData = {
  consultas: [
    "Medicina General",
    "Medicina Interna",
    "Ginecología - Obstetricia",
    "Pediatría",
    "Ortopedia",
    "Cirugía General",
    "Cardiología",
    "Neuropsicología",
    "Nutrición y Dietética",
    "Psicología",
    "Fonoaudiología",
    "Terapia Ocupacional",
    "Terapia Física y Respiratoria",
    "Enfermería y Atención Domiciliaria",
  ],
  diagnosticos: [
    "Electrocardiograma",
    "Holter 24 Horas",
    "MAPA (Monitoreo de Presión Arterial 24 Horas)",
    "Toma de Muestras – Laboratorio Clínico",
    "Ecografía Ginecológica",
    "Ecografía Obstétrica",
    "Detalle Anatómico",
    "Perfil Biofísico",
    "Translucencia Nucal",
    "Doppler Feto Placentario",
    "Ecografía Obstétrica Transabdominal",
    "Ecografía Obstétrica Transvaginal",
    "Doppler de Arterias Renales",
    "Doppler de Vasos de Cuello",
    "Doppler Carotideo",
    "Doppler Venoso de Miembros Inferiores y Superiores",
    "Doppler Arterial de Miembros Inferiores y Superiores",
    "Ecografía Testicular con Análisis Doppler",
    "Ecografía Abdomen Total",
    "Ecografía Renal",
    "Ecografía Mamaria",
    "Ecografía de Tiroides",
    "Ecografía de Tejidos Blandos",
    "Ecografía Vascular",
  ],
  complejidad: [
    "Consulta médica general",
    "Consulta especializada por Internista",
    "Consulta especializada por Pediatría",
    "Consulta especializada por Ginecología",
    "Consulta especializada por Ortopedista",
    "Consulta especializada por Cardiología",
    "(Ecocardiograma, Electrocardiograma, Holter, MAPA, Monitoreo Presión Arterial)",
    "Consulta especializada por Reumatología",
    "Consulta especializada por Cirugía General",
  ],
};

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services" id="services">
      <h2 className="title">Nuestra Línea de Servicios</h2>
      <p className="subtitle">
        Conoce los servicios médicos y diagnósticos que tenemos para ti y tu
        familia.
      </p>

      <div className="services-grid">
        {/* --- Consultas Médicas --- */}
        <div className="service-card">
          <FaStethoscope className="service-icon" />
          <h3>Consultas Médicas</h3>
          <ul>
            {servicesData.consultas.map((item, index) => (
              <li
                key={index}
                className="service-item"
                onClick={() => setSelectedService(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* --- Ayudas Diagnósticas --- */}
        <div className="service-card">
          <FaMicroscope className="service-icon" />
          <h3>Ayudas Diagnósticas</h3>
          <ul>
            {servicesData.diagnosticos.map((item, index) => (
              <li
                key={index}
                className="service-item"
                onClick={() => setSelectedService(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* --- Servicios de Complejidad --- */}
        <div className="service-card">
          <FaClinicMedical className="service-icon" />
          <h3>Servicios I y II de Complejidad</h3>
          <ul>
            {servicesData.complejidad.map((item, index) => (
              <li
                key={index}
                className="service-item"
                onClick={() => setSelectedService(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Modal con info del servicio seleccionado --- */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService}</h3>
            <p>
              Información detallada sobre <b>{selectedService}</b>. Aquí puedes
              agregar descripción, beneficios, recomendaciones y un video.
            </p>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video explicativo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <button className="close-btn" onClick={() => setSelectedService(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;