import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 275px;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  background-color: white;
`;

const PokemonImg = styled.img`
  width: 65%;
`

const TextoContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  gap: 10px;
  padding: 5px 10px;
`

const Nombre = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: sans-serif;
  text-transform: capitalize;
`;

const IdSpan = styled.span`
  font-family: sans-serif;
  padding: .25rem .5rem;
  border-radius: 100vmax;
  font-size: .75rem;
  font-weight: 600;
  background-color: #ececec;
`;

const TipoContenedor = styled.div`
  display: flex;
  gap: 10px; 
  flex-wrap: wrap; 
  justify-content: center;
`;

const Tipo = styled.div`
  font-family: sans-serif;
  padding: .25rem .5rem;
  margin: 5px;
  border-radius: 100vmax;
  font-size: 0.75rem;
  text-transform: capitalize;
  font-weight: 500;
  background-color: ${({ color }) => color};
`;

const Id = (id) => `#${String(id).padStart(3, '0')}`;

const PokeTarjeta = ({pokemon}) => {
  return(
    <Tarjeta>
      <Link to={`/pokemon/${pokemon.id}`} state={{ pokemon }}>
        <PokemonImg 
          src={pokemon.imagen} alt={pokemon.nombre} 
        />
      </Link>
      <TextoContenedor>
        <IdSpan>{Id(pokemon.id)}</IdSpan>
        <Nombre>{pokemon.nombre}</Nombre>
      </TextoContenedor>
      <TipoContenedor>
        {pokemon.tipos.map(t => (
          <Tipo key={t} color={pokemon.colorTipos[t]}>
            {t}
          </Tipo>
        ))}
      </TipoContenedor>
    </Tarjeta>
  );
}

export default PokeTarjeta
