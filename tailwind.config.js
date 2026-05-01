/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#46308c',
        'brand-red': '#dd3840',
        'brand-coral': '#f04e49',
        'brand-mint': '#00fa9a',
        'brand-offwhite': '#f5f5f0',
        'brand-black': '#000000',
      },
      fontFamily: {
        heading: ['"Archivo Black"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px rgba(0,0,0,1)',
        'hard-hover': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'drift-slow': 'drift 10s ease-in-out infinite',
        'drift-fast': 'drift 6s ease-in-out infinite reverse',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bubble-rise': 'bubbleRise 8s linear infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -15px) rotate(3deg)' },
          '66%': { transform: 'translate(-10px, 15px) rotate(-3deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' }
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' }
        },
        bubbleRise: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: 0 },
          '20%': { opacity: 0.5 },
          '80%': { opacity: 0.5 },
          '100%': { transform: 'translateY(-20vh) scale(1.5)', opacity: 0 }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      }
    },
  },
  plugins: [],
}
