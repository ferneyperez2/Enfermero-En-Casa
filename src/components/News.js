import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faBrain, faBaby } from '@fortawesome/free-solid-svg-icons';
import "./News.css";

const newsData = [
  {
    id: 1,
    title: "Nueva jornada de vacunación",
    description: "Este sábado se realizará una jornada gratuita de vacunación en el hospital.",
    date: "01/09/2025",
    icon: faSyringe, // Usamos el ícono de jeringa
  },
  {
    id: 2,
    title: "Conferencia sobre salud mental",
    description: "Charla dirigida a jóvenes y padres de familia sobre prevención y cuidado emocional.",
    date: "05/09/2025",
    icon: faBrain, // Usamos el ícono de cerebro
  },
  {
    id: 3,
    title: "Nueva sala de pediatría",
    description: "Se inaugura la sala equipada con tecnología moderna para atención infantil.",
    date: "10/09/2025",
    icon: faBaby, // Usamos el ícono de bebé
  },
];

function News() {
  return (
    <section id="news" className="news-section">
      <h2 className="section-title">Noticias y Eventos</h2>
      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-icon-container">
              <FontAwesomeIcon icon={item.icon} className="news-icon" />
            </div>
            <h3 className="news-card-title">{item.title}</h3>
            <p className="news-card-desc">{item.description}</p>
            <span className="news-card-date">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;