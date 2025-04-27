/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Baskerville', 'serif'],
        yeon: ['Yeon Sung', 'cursive'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // sadece yarıya kadar kaydırıyoruz
        },
      },
      animation: {
        'scroll-slow': 'scroll 60s linear infinite',
      },
    },
  },
  plugins: [],
}

