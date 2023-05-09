import Image from 'next/image';
import { Pokemon } from 'pokenode-ts';
import clsx from 'clsx';

type Props = {
  pokemon: Pokemon;
  hasGuess: boolean;
  loading: boolean;
};

export const PokemonImage: React.FC<Props> = ({ pokemon: { id }, hasGuess, loading }) => {
  const classes = clsx(
    'absolute transition-all duration-75 sm:left-6 z-10 lg:left-20',
    !loading && hasGuess ? 'brightness-100' : 'brightness-0',
    loading && 'brightness-0',
  );

  return (
    <section className="flex justify-center items-center relative aspect-video w-screen h-[400px] mt-3 sm:w-[620px]  sm:h-auto md:w-[740px] lg:w-[860px] ">
      <Image
        className={classes}
        src={
          loading
            ? '/random.gif'
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        }
        alt="Pokemon"
        width={320}
        height={320}
      />

      <div className="bg-whos-that-pokemon-mb sm:bg-whos-that-pokemon absolute top-0 bottom-0 left-0 right-0 bg-cover  bg-no-repeat z-0 w-[350px] h-[350px] m-auto rounded-lg sm:rounded-md sm:rounded-tl-xl sm:rounded-tr-xl sm:w-[620px] sm:bg-contain sm:h-auto sm:aspect-video md:w-[740px] lg:w-[860px]" />
    </section>
  );
};
