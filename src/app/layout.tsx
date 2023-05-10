import { Press_Start_2P } from 'next/font/google';
import './globals.css';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: "Who's that Pokémon?",
  description: 'A simple game to guess the Pokémon.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={pressStart.className}>{children}</body>
    </html>
  );
}
