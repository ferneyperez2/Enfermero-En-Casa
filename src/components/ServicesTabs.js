import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faMicroscope, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import servicesData from "./data/servicesData";
import ServiceModal from "./ServiceModal";
import "./ServicesTabs.css";

function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("consultas");
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-tabs" id="services">
      <h2 className="title">Nuestra Línea de Servicios</h2>
      <p className="subtitle">Selecciona un servicio y agenda tu cita fácilmente.</p>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "consultas" ? "active" : ""}
          onClick={() => setActiveTab("consultas")}
        >
          <FontAwesomeIcon icon={faStethoscope} /> Consultas
        </button>
        <button
          className={activeTab === "diagnosticos" ? "active" : ""}
          onClick={() => setActiveTab("diagnosticos")}
        >
          <FontAwesomeIcon icon={faMicroscope} /> Diagnósticos
        </button>
        <button
          className={activeTab === "terapias" ? "active" : ""}
          onClick={() => setActiveTab("terapias")}
        >
          <FontAwesomeIcon icon={faDumbbell} /> Terapias
        </button>
      </div>

      {/* Lista de servicios */}
      <div className="tab-content">
        <ul className="service-list">
          {servicesData[activeTab].map((service, idx) => (
            <li
              key={idx}
              className="service-item"
              onClick={() => setSelectedService(service)}
            >
              <FontAwesomeIcon icon={service.icon} className="item-icon" />
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal con detalle + formulario */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}

export default ServicesTabs;