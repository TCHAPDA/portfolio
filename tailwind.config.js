/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',      // Slate 900
          card: '#1e293b',      // Slate 800
          accent: '#38bdf8',    // Sky 400
          purple: '#818cf8',    // Indigo 400
        }
      },
    },
  },
  plugins: [],
}