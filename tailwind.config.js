/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'whos-that-pokemon': 'url("/bg.png")',
        'whos-that-pokemon-mb': 'url("/bg-mobile.png")',
      },
      backgroundPosition: {
        'right-center': 'right center',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      textShadow: {
        '10xl': '0 0 10px rgba(255, 0, 0)',
      },
    },
  },
  plugins: [],
};
