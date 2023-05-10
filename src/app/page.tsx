import { Toaster } from 'react-hot-toast';
import { getPokemon } from '@app/api/pokemon/route';
import { PokemonContainer } from '@components/PokemonContainer';

const loagPokemon = async () => {
  const pokemonList = await getPokemon();
  const guessPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

  return { pokemonList, guessPokemon };
};

export default async function Home() {
  const { pokemonList, guessPokemon } = await loagPokemon();

  return (
    <main className='bg-stone-900 min-h-screen flex flex-col justify-start items-center'>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#D81111',
            color: '#ffcb05',
            textShadow:
              '3px 0 #3a5ea9, -3px 0 #3a5ea9, 0 3px #3a5ea9, 0 -3px #3a5ea9, 2px 2px #3a5ea9, -2px -2px  #3a5ea9, 2px -2px #3a5ea9, -2px 2px #3a5ea9',
          },
          duration: 2000,
        }}
      />

      <PokemonContainer pokemon={pokemonList} guess={guessPokemon} />
    </main>
  );
}
