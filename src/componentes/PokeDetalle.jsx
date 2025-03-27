import styled from '@emotion/styled';
import { useState } from "react";
import '../../main.css'

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.colorFondo};
  align-items: center;
  overflow: hidden;
`;

const ContenedorSuperior = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

const ID = styled.div`
  font-size: 1rem;
`;

const ContenedorInferior = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 60vh;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow-y: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const NavBotones = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const Boton = styled.button`
  background-color: white;
  font-size: 0.85rem;
  padding: 0.5rem;
  border: none;
  color: ${(props) => (props.activo ? "black" : "gray")};
  font-family: sans-serif;
  font-weight: 500;
  border-bottom: ${(props) => (props.activo ? "2px solid blue" : "none")};
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
  font-size: 0.80rem;
  text-transform: capitalize;
  font-weight: 600;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: bold;
`;

const ImagenPokemon = styled.img`
  position: absolute;
  width: 240px;
  height: auto;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: 2;
`;

const ContenedorAcercaDe = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap:10px;
  height: 280px;
`;

const Fila = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
`;

const Etiqueta = styled.span`
  width: 100px; 
  text-align: left; 
  color: grey;
`;

const Valor = styled.span`
  flex: 1; 
  text-align: left; 
  text-transform: capitalize;
`;

const ContenedorEstadisticas = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap:10px;
  height: 280px;
`;

const Barra = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  min-width: 150px;
`;

const BarraRelleno = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  width: ${(props) => (props.valor / 300) * 100}%;
`;

const ContenedorMovimientos = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap:10px;
  height: 280px;
  text-transform: capitalize;
`;

const Id = (id) => `#${String(id).padStart(3, '0')}`;

const PokeDetalle = ({ pokemon }) => {
  const [botonActivo, setBotonActivo] = useState("acerca de");
  return (
    <Contenedor colorFondo={pokemon.colorFondo}>
      <ContenedorSuperior>
        <div>{pokemon.nombre}</div>
        <ID>{Id(pokemon.id)}</ID>
      </ContenedorSuperior>
      <ContenedorInferior>
        <TipoContenedor>
          {pokemon.tipos.map(t => (
            <Tipo key={t} color={pokemon.colorTipos[t]}>
              {t}
            </Tipo>
          ))}
        </TipoContenedor>
        <NavBotones className="botones">
          <Boton activo={botonActivo === "acerca de"} onClick={() => setBotonActivo("acerca de")}>
            Acerca de
          </Boton>
          <Boton activo={botonActivo === "estadisticas"} onClick={() => setBotonActivo("estadisticas")}>
            Estadísticas
          </Boton>
          <Boton activo={botonActivo === "movimientos"} onClick={() => setBotonActivo("movimientos")}>
            Movimientos
          </Boton>
        </NavBotones>
        <div className="info">
          {botonActivo === "acerca de" && 
          <ContenedorAcercaDe>
            <Fila>
              <Etiqueta>Peso</Etiqueta> <Valor>{pokemon.peso} Kg</Valor>
            </Fila>
            <Fila>
              <Etiqueta>Altura</Etiqueta> <Valor>{(pokemon.altura / 10).toFixed(1)} m</Valor>
            </Fila>
            <Fila>
              <Etiqueta>Habilidades</Etiqueta> 
              <Valor>
                {pokemon.habilidades.join(", ")}
              </Valor>
            </Fila>
          </ContenedorAcercaDe>}

          {botonActivo === "estadisticas" && 
          <ContenedorEstadisticas>
            <Fila>
              <Etiqueta>HP</Etiqueta> <Valor>{pokemon.estadisticas.hp}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.hp} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
            <Fila>
              <Etiqueta>Ataque</Etiqueta> <Valor>{pokemon.estadisticas.ataque}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.ataque} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
            <Fila>
              <Etiqueta>Defensa</Etiqueta> <Valor>{pokemon.estadisticas.defensa}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.defensa} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
            <Fila>
              <Etiqueta>Velocidad</Etiqueta> <Valor>{pokemon.estadisticas.velocidad}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.velocidad} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
            <Fila>
              <Etiqueta>Ataque Especial</Etiqueta> <Valor>{pokemon.estadisticas.ataqueEspecial}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.ataqueEspecial} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
            <Fila>
              <Etiqueta>Defensa Especial</Etiqueta> <Valor>{pokemon.estadisticas.defensaEspecial}</Valor> 
              <Barra>
                <BarraRelleno valor={pokemon.estadisticas.defensaEspecial} color={pokemon.colorFondo} />
              </Barra>
            </Fila>
          </ContenedorEstadisticas>}

          {botonActivo === "movimientos" && 
          <ContenedorMovimientos>
            {pokemon.movimientos.slice(0, 5).map((movimiento, i) => (
              <p key={i}>{movimiento}</p>
            ))}
          </ContenedorMovimientos>}
        </div>
      </ContenedorInferior>
      <ImagenPokemon src={pokemon.imagen} alt={pokemon.nombre}></ImagenPokemon>
    </Contenedor>
  );
};

export default PokeDetalle;