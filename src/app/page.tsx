import { Press_Start_2P } from 'next/font/google';
import { getPokemon } from '@app/api/pokemon/route';
import { PokemonList } from '@components/PokemonList';
import { PokemonImage } from '@components/PokemonImage';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
});

const loagPokemon = async () => {
  const pokemonList = await getPokemon();
  const guessPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

  return { pokemonList, guessPokemon };
};

export default async function Home() {
  const { pokemonList, guessPokemon } = await loagPokemon();

  return (
    <main className={`${pressStart.className} bg-stone-900 min-h-screen flex flex-col p-14 justify-start items-center`}>
      <PokemonList pokemon={pokemonList} guess={guessPokemon} />
    </main>
  );
}
