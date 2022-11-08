module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'card-bg': 'hsl(216, 50%, 16%)',
        'main-bg': 'hsl(217, 54%, 11%)',
        line: 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'Arial'],
      },
    },
  },
  plugins: [],
};
