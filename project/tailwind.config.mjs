/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Erfasst ALLE Dateien im src-Ordner, egal in welchem Unterordner sie liegen
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
      },
      padding: {},
    },
  },
  plugins: [],
};

export default config;
