/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: '#FBAAFF',
        azul: '#4D73DB',
        verde:
          '#5BD1D7',
        azul_escuro:
          '#0F172A',
      },
      fontFamily: {
        Righteous: [
          'Righteous',
          'sans-serif',
        ],
        Poppins: [
          'Poppins',
          'sans-serif',
        ],
      },
    },
  },

  plugins: [],
}
