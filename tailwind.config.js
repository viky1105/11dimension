/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'system-ui', 'sans-serif'],
      },
      colors: {
        neonPink: "#ff00e6",
        neonCyan: "#00f0ff",
        deepSpace: "#0a0a0f",
        galaxy: "#0b0f2a",
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 240, 255, 0.4)",
      }
    },
  },
  plugins: [],
}
