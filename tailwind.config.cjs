/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#6D3998',
        pri_dark1: '#41225B',
        pri_dark2: '#160B1E',
        pri_light1: '#E2D7EA',
        pri_light2: '#CAB8DA',
        secondary: '#00368D',
        sec_light: '#669CF3',
      },
      backgroundImage: {
        random: 'https://source.unsplash.com/random/?india',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
