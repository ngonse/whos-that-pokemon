'use client';

import confetti from 'canvas-confetti';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

type Props = {
  pokemonList: Pokemon[];
  guess: Pokemon;
  hasGuess: boolean;
  setGuess: (hasGuess: boolean) => void;
  loadPokemon: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const Options: React.FC<Props> = ({
  pokemonList,
  guess,
  hasGuess,
  setGuess,
  loadPokemon,
  loading,
  setLoading,
}) => {
  const [wrongGuess, setWrongGuess] = useState<number[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const checkPokemon = (id: number) => {
    if (hasGuess) return;

    if (id === guess.id) {
      confetti();
      setGuess(true);
      timerRef.current = setTimeout(() => {
        setLoading(true);
        loadPokemon();
      }, 1000);
    } else {
      setWrongGuess((prev) => (prev.includes(id) ? prev : [...prev, id]));
      toast('Wrong guess!');
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
    <section className="relative grid grid-cols-2 grid-rows-2 gap-3 mt-3 w-full px-3 sm:w-[800px]">
      {pokemonList.map(({ id, name }) => (
        <button
          key={id}
          className={`button ${wrongGuess.includes(id) && 'opacity-50'}`}
          onClick={() => checkPokemon(id)}
        >
          {!loading ? (
            name
          ) : (
            <>
              <span className="animate-[bounce_1s_ease-in-out_100ms_infinite]">.</span>
              <span className="animate-[bounce_1s_ease-in-out_200ms_infinite]">.</span>
              <span className="animate-[bounce_1s_ease-in-out_300ms_infinite]">.</span>
            </>
          )}
        </button>
      ))}
    </section>
  );
};
