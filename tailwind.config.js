/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Kulim Park"', 'sans-serif'],
        'body': ['"Afacad"', 'sans-serif'],
      },
      colors: {
        'brand-red': '#9F2424',
        'brand-white': '#FFFFFF',
        'brand-black': '#000000',
      },
    },
  },
  plugins: [],
}
