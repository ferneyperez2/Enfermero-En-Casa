import React from "react";
import "./News.css";

const newsData = [
  {
    id: 1,
    title: "Nueva jornada de vacunación",
    description:
      "Este sábado se realizará una jornada gratuita de vacunación en el hospital.",
    date: "01/09/2025",
    icon: "💉",
  },
  {
    id: 2,
    title: "Conferencia sobre salud mental",
    description:
      "Charla dirigida a jóvenes y padres de familia sobre prevención y cuidado emocional.",
    date: "05/09/2025",
    icon: "🧠",
  },
  {
    id: 3,
    title: "Nueva sala de pediatría",
    description:
      "Se inaugura la sala equipada con tecnología moderna para atención infantil.",
    date: "10/09/2025",
    icon: "👶",
  },
];

function News() {
  return (
    <section id="news" className="news-section">
      <h2 className="news-title">Noticias y Eventos</h2>
      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-icon">{item.icon}</div>
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
