import { Pokemon, PokemonClient } from 'pokenode-ts';

const MAX_POKEMON_ID = 1010;
const MIN_POKEMON_ID = 1;

export const getPokemon = async () => {
  const api = new PokemonClient();

  const pokemonList: Pokemon[] = [];
  const pokemonIds: number[] = [];

  while (pokemonIds.length < 4) {
    const pokemonId = Math.floor(Math.random() * (MAX_POKEMON_ID - MIN_POKEMON_ID + 1)) + MIN_POKEMON_ID;

    if (pokemonIds.includes(pokemonId)) {
      continue;
    }

    pokemonIds.push(pokemonId);
  }

  for (const pokemonId of pokemonIds) {
    const pokemon = await api.getPokemonById(pokemonId);

    pokemonList.push(pokemon);
  }

  return pokemonList;
};

export const GET = async () => {
  try {
    const pokemonList = await getPokemon();

    return new Response(JSON.stringify(pokemonList), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
};
