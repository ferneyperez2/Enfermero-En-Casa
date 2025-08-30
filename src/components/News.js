import React from "react";
import "./News.css";

function News() {
  return (
    <section id="news" className="news">
      <h2>Noticias y Eventos</h2>
      <div className="news-cards">
        <div className="card">Nueva jornada de vacunación este sábado.</div>
        <div className="card">Conferencia sobre salud mental en jóvenes.</div>
        <div className="card">Se inaugura la nueva sala de pediatría.</div>
      </div>
    </section>
  );
}

export default News;
