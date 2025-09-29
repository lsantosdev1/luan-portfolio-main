/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Esta linha é crucial para escanear todos os seus componentes
    "./**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}