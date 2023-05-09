'use client';

import { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

import { PokemonImage } from './PokemonImage';
import { Options } from './Options';
import { getPokemon } from '@app/api/pokemon/route';

type Props = {
  pokemon: Pokemon[];
  guess: Pokemon;
};

export const PokemonContainer: React.FC<Props> = ({ pokemon, guess }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(pokemon);
  const [guessPokemon, setGuessPokemon] = useState<Pokemon>(guess);

  const [hasGuess, setGuess] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadPokemon = async () => {
    const pokemonList = await getPokemon();
    const guessPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    setGuess(false);

    setPokemonList(pokemonList);
    setGuessPokemon(guessPokemon);

    setLoading(false);
  };

  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:min-w-full">
      <PokemonImage pokemon={guessPokemon} hasGuess={hasGuess} loading={loading} />
      <Options
        pokemonList={pokemonList}
        guess={guessPokemon}
        hasGuess={hasGuess}
        setGuess={setGuess}
        loadPokemon={loadPokemon}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};
