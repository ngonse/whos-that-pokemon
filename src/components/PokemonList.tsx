'use client';

import { Pokemon } from 'pokenode-ts';
import confeti from 'canvas-confetti';
import { useEffect, useRef, useState } from 'react';
import { PokemonImage } from './PokemonImage';

type Props = {
  pokemon: Pokemon[];
  guess: Pokemon;
};

export const PokemonList: React.FC<Props> = ({ pokemon, guess }) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hasGuess, setGuess] = useState(false);
  const [wrongGuess, setWrongGuess] = useState<number[]>([]);

  const checkPokemon = (id: number) => {
    if (hasGuess) return;

    if (id === guess.id) {
      confeti();
      setGuess(true);
      timerRef.current = setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setWrongGuess((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      <PokemonImage pokemon={guess} hasGuess={hasGuess} />

      <section className="relative grid grid-cols-2 grid-rows-2 gap-3 mt-3 w-[800px]">
        {pokemon.map(({ id, name }) => (
          <button
            key={id}
            className={`button ${wrongGuess.includes(id) && 'opacity-50'}`}
            onClick={() => checkPokemon(id)}
          >
            {name}
          </button>
        ))}
      </section>
    </>
  );
};
