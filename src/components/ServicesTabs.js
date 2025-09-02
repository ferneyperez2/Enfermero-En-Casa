import React, { useState } from "react";
import { FaStethoscope, FaMicroscope, FaClinicMedical } from "react-icons/fa";
import servicesData from "../components/data/servicesData";
import ServiceModal from "./ServiceModal";
import "../components/ServicesTabs.css";

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
          <FaStethoscope /> Consultas
        </button>
        <button
          className={activeTab === "diagnosticos" ? "active" : ""}
          onClick={() => setActiveTab("diagnosticos")}
        >
          <FaMicroscope /> Diagnósticos
        </button>
        <button
          className={activeTab === "complejidad" ? "active" : ""}
          onClick={() => setActiveTab("complejidad")}
        >
          <FaClinicMedical /> Servicios I y II
        </button>
      </div>

      {/* Lista de servicios */}
      <div className="tab-content">
        <ul>
          {servicesData[activeTab].map((service, idx) => (
            <li
              key={idx}
              className="service-item"
              onClick={() => setSelectedService(service)}
            >
              {service.name}
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
