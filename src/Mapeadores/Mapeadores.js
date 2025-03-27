import Pokemon from "../Entidades/Entidades";

const colores = {
  grass: "#78C850", 
  fire: "#F08030", 
  water: "#6890F0", 
  bug: "#A8B820", 
  normal: "#A8A878", 
  electric: "#F8D030", 
  psychic: "#F85888", 
  ghost: "#705898", 
  ice: "#98D8D8", 
  dragon: "#7038F8",
  dark: "#705848", 
  fairy: "#EE99AC",
  fighting: "#C03028", 
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  steel: "#B8B8D0",
  rock: "#B8A038",
};

export function mapearPokemon(data) {
  const{
    id,
    name: nombre,
    sprites,
    types: tipos,
    weight: peso,
    height: altura,
    stats,
    moves: movimientos,
    abilities: habilidades,
  } = data;

  const imagen = sprites.other['official-artwork'].front_default;
  
  const estadisticas = {
    hp: stats[0]?.base_stat,
    ataque: stats[1].base_stat,
    defensa: stats[2].base_stat,
    ataqueEspecial: stats[3].base_stat,
    defensaEspecial: stats[4].base_stat,
    velocidad: stats[5].base_stat,
  };

  const colorTipos = tipos.reduce((resultado, tipo) => {
    resultado[tipo.type.name] = colores[tipo.type.name];
    return resultado;
  }, {});

  const colorFondo = colores[tipos[0].type.name];

  return new Pokemon(
    id,
    nombre,
    imagen,
    tipos.map(tipo => tipo.type.name),
    peso,
    altura,
    estadisticas,
    colorTipos,
    colorFondo,
    movimientos.map(movimiento => movimiento.move.name),
    habilidades.map(habilidad => habilidad.ability.name),
  );
}
