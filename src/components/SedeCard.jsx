import React from 'react';
import './SedeCard.css'; // Crea este archivo CSS para el estilo de la tarjeta

const SedeCard = ({ nombre, direccion, imagen }) => {
  return (
    <div className="sede-card">
      <div className="card-image-container">
        <img src={imagen} alt={`Sede ${nombre}`} className="card-image" />
      </div>
      <div className="card-info">
        <h3 className="card-name">{nombre}</h3>
        <p className="card-address">
          <span className="icon-marker">📍</span> {direccion}
        </p>
      </div>
    </div>
  );
};

export default SedeCard;