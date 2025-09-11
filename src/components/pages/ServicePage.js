import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import Appointment from "../Appointment";
import '../ServicePage.css';

function ServicePage() {
  const { serviceName } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Buscar el servicio en el objeto de datos
    let foundService = null;
    for (const category in servicesData) {
      const service = servicesData[category].find(
        (s) => s.name.toLowerCase().replace(/\s/g, "-") === serviceName
      );
      if (service) {
        foundService = service;
        break;
      }
    }
    setService(foundService);
  }, [serviceName]);

  if (!service) {
    return (
      <div className="service-page-loading">
        <h1>Servicio no encontrado</h1>
        <p>Parece que el servicio que buscas no está disponible.</p>
        <Link to="/" className="back-link">
          &larr; Volver a la página principal
        </Link>
      </div>
    );
  }

  return (
    <section className="service-page">
      <div className="service-header">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <Link to="/" className="back-link">
          &larr; Volver a Servicios
        </Link>
      </div>

      <div className="service-content">
        <div className="service-video">
          <iframe
            src={service.video}
            title={service.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="service-details">
          <h2>Beneficios del servicio</h2>
          <ul className="service-benefits">
            {service.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-appointment">
        <h3>Agenda tu cita para {service.name}</h3>
        <Appointment serviceName={service.name} />
      </div>
    </section>
  );
}

export default ServicePage;