import React from 'react';
import { useLocation } from 'react-router-dom';
import PokeDetalle from '../componentes/PokeDetalle';

const Detalle = () => {
  const { state } = useLocation(); 
  const { pokemon } = state;

  return (
    <div>
      <PokeDetalle pokemon={pokemon} /> 
    </div>
  );
};

export default Detalle;