/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d4edd',
        'neon-pink': '#ff00ff',
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#121225',
        'glass': 'rgba(20, 20, 40, 0.7)',
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        futura: ['Exo 2', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.3)',
        'neon-purple': '0 0 5px #9d4edd, 0 0 20px rgba(157, 78, 221, 0.3)',
        'neon-pink': '0 0 5px #ff00ff, 0 0 20px rgba(255, 0, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.3)' },
          '100%': { boxShadow: '0 0 10px #00f3ff, 0 0 30px rgba(0, 243, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};