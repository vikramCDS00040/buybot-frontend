/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#03A6A1',
        'secondary-light': '#FFE3BB',
        'secondary-dark': '#3B2F2F',
        'accent-light': '#FFA673',
        'accent-dark': '#FF8A4C',
        'warning-light': '#FF4F0F',
        'warning-dark': '#FF7133',
        'neutral-light': '#F9F9F9',
        'neutral-dark': '#1A1A1A',
        'text-light': '#222222',
        'text-dark': '#F1F1F1',
      },
    },
  },
  plugins: [],
}
