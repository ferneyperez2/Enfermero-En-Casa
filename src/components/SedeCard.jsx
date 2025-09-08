import React from 'react';
import './SedeCard.css';

function SedeCard({ nombre, direccion, imagen }) {
  return (
    <div className="sede-card">
      <div className="sede-card-image" style={{ backgroundImage: `url(${imagen})` }}></div>
      <div className="sede-card-content">
        <h3 className="sede-card-title">{nombre}</h3>
        <p className="sede-card-address">{direccion}</p>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion + ', ' + nombre)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-map"
        >
          Ver en Mapa
        </a>
      </div>
    </div>
  );
}

export default SedeCard;