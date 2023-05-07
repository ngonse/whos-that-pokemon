import Image from 'next/image';
import { Pokemon } from 'pokenode-ts';

type Props = {
  pokemon: Pokemon;
  hasGuess: boolean;
};

export const PokemonImage: React.FC<Props> = ({ pokemon: { id }, hasGuess }) => {
  return (
    <section className="relative aspect-video w-[800px]">
      <Image
        className={`${
          hasGuess ? 'brightness-100' : 'brightness-0'
        } transition-all duration-75 absolute top-16 left-20 z-10`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="Next.js Logo"
        width={300}
        height={300}
      />

      <div
        className="bg-hows-that-pokemon absolute top-0 bottom-0 left-0 right-0 bg-contain bg-no-repeat
        rounded-md rounded-tl-xl rounded-tr-xl z-0"
      />
    </section>
  );
};
