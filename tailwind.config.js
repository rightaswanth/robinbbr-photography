/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-primary': '#0F0F0F', // Deep Charcoal/Black text
        'luxury-bg': '#FAF9F7',      // Ivory/Off-white background
        gold: {
          DEFAULT: '#E5C478',        // Vibrant gold luster
          dark: '#C6A769',
          light: '#F2E2B5',
          accent: '#C5A021',         // More vibrant metallic gold for better visibility
        },
        beige: '#E8E2D9',            // Light beige surfaces
        surface: '#FFFFFF',
        border: '#E8E2D9',
        ivory: '#FAF9F7',
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        accent: ["'Inter'", "sans-serif"], // Placeholder for accent font
      },
      animation: {
        'ken-burns': 'ken-burns 8s ease-in-out infinite alternate',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
