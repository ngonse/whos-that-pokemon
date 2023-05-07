'use client';

import { Pokemon } from 'pokenode-ts';

type Props = {
  pokemon: Pokemon[];
  guess: Pokemon;
};

export const PokemonList: React.FC<Props> = ({ pokemon, guess }) => {
  const checkPokemon = (id: number) => {
    if (id === guess.id) {
      console.log('You got it right!');
      window.location.reload();
    } else {
      console.log('You got it wrong!');
    }
  };

  return (
    <section className="relative grid grid-cols-2 grid-rows-2 gap-3 mt-3 w-[800px]">
      {pokemon.map(({ id, name }) => (
        <button key={id} className="button" onClick={() => checkPokemon(id)}>
          {name}
        </button>
      ))}
    </section>
  );
};
