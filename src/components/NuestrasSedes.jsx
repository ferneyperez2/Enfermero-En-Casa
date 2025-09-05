import React from 'react';
import SedeCard from './SedeCard';
import './NuestrasSedes.css'; // Conserva el estilo del contenedor

// Importa tus imágenes aquí
import MontelibanoImg from '../components/assets/sedemontelibano.png';
import AyapelImg from '../components/assets/sedeayapel.png';
import BuenavistaImg from '../components/assets/Buenavista.png';
import SanJoseUreImg from '../components/assets/Buenavista.png'; // Imagen para la sede futura

const sedes = [
  {
    id: 1,
    nombre: 'MONTELÍBANO',
    direccion: 'CRA 6 N°14-77 B: Centro',
    imagen: MontelibanoImg,
  },
  {
    id: 2,
    nombre: 'AYAPEL',
    direccion: 'carrera 8 N° 8- 4 B/ San José',
    imagen: AyapelImg,
  },
  {
    id: 3,
    nombre: 'BUENAVISTA',
    direccion: 'Cra 13 cll 9A-5 Barrio Los Almendros',
    imagen: BuenavistaImg,
  },
  // {
  //   id: 4,
  //   nombre: 'SAN JOSÉ DE URÉ',
  //   direccion: 'Calle 8 N A - 95 Barro San José',
  //   imagen: SanJoseUreImg,
  // },
];

function NuestrasSedes() {
  return (
    <div className="sedes-container">
      <div className="sedes-banner">
        <h1 className="sedes-title">Nuestras Sedes</h1>
        <p className="sedes-intro">
          Contamos con Sede en Montelíbano, Ayapel y Buenavista, próximamente en el municipio de San José de Urés.
        </p>
      </div>
      
      <div className="sedes-grid">
        {sedes.map((sede) => (
          <SedeCard
            key={sede.id}
            nombre={sede.nombre}
            direccion={sede.direccion}
            imagen={sede.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default NuestrasSedes;