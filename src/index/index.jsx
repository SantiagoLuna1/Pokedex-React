import React from 'react';
import { useState, useEffect } from "react"
import PokeTarjeta from '../componentes/PokeTarjeta';
import Paginacion from "../componentes/Paginacion";
import { listadoPokemones } from '../Api/Api';
import styled from '@emotion/styled';
import { mapearPokemon } from '../Mapeadores/Mapeadores';


const ListaPokemones = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 10px;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  justify-items: center; 

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContenedorPaginacion = styled.div`
  display: flex;
  justify-content: center;
`;

const Index = () => {
  const [pokemones, setPokemones] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await listadoPokemones(offset, limit);

        const pokemonDetalles = await Promise.all(
          data.results.map(async (pokemon) => {
            const respuesta = await fetch(pokemon.url);
            const dataPokemon = await respuesta.json();
            return mapearPokemon(dataPokemon);
          })
        );
        setPokemones(pokemonDetalles);
        setTotal(data.count);
      } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
      }
    };

    fetchData();
  }, [offset, limit]);

  const totalPaginas = Math.ceil(total / limit);

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
    setOffset((pagina - 1) * limit);
  };
  
  return(
    <div>
      <ListaPokemones>
        {pokemones.map((pokemon) => (
          <PokeTarjeta key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListaPokemones>

      <ContenedorPaginacion>
        <Paginacion
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          cambiarPagina={cambiarPagina}
        />
      </ContenedorPaginacion>
    </div>
  );
};

export default Index
