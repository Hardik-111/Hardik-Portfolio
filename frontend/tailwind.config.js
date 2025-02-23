/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src/ for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#14b8a6', // Default teal from your portfolio
        },
        purple: {
          600: '#7c3aed', // Default purple from your portfolio
          900: '#2d1e5c', // Darker purple for gradients
        },
        navy: {
          800: '#1e3a8a', // Deep navy blue for gradients
        },
        silver: {
          300: '#d3d3d3', // Light silver for Prime-inspired designs (optional, from previous Projects.jsx)
        },
        gray: {
          50: '#f5f5f5', // Light gray background
          100: '#f3f4f6', // Slightly darker gray for subtle backgrounds
          900: '#1e293b', // Dark gray for dark mode or backgrounds
        },
      },
      boxShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Default font family for consistency
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Optional: For custom scrollbar styling
  ],
}