const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function listadoPokemones(offset, limit) {
  try {
    const respuesta = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);
    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener los pokemones:", error);
    return null;
  }
}