import Image from 'next/image';
import { Pokemon } from 'pokenode-ts';

type Props = {
  pokemon: Pokemon;
  hasGuess: boolean;
};

export const PokemonImage: React.FC<Props> = ({ pokemon: { id }, hasGuess }) => {
  return (
    <section className="flex justify-center items-center relative aspect-video w-screen h-[400px] sm:w-[800px]">
      <Image
        className={`${
          hasGuess ? 'brightness-100' : 'brightness-0'
        } transition-all duration-75 absolute sm:top-16 sm:left-20 z-10`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="Next.js Logo"
        width={320}
        height={320}
      />

      <div
        className="bg-hows-that-pokemon-mb absolute top-0 bottom-0 left-0 right-0 bg-cover bg-no-repeat
        sm:rounded-md sm:rounded-tl-xl sm:rounded-tr-xl z-0 w-[350px] h-[350px] m-auto rounded-lg"
      />
    </section>
  );
};
