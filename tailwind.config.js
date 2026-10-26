/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User Specified Master Gold & White Theme Palette
        themeGold: {
          primary: '#C99524',
          rich: '#A87512',
          champagne: '#F5E7BF',
          border: '#E8D6A5',
          light: '#FCFAF5',
        },
        themeText: {
          primary: '#242424',
          secondary: '#686868',
        },
        // Royal Antique Gold palette directly sampled from the official clinic emblem
        gold: {
          50: '#FCFAF5',
          100: '#F5E7BF',
          200: '#E8D6A5',
          300: '#DEBF78',
          400: '#D4AF37',
          500: '#C99524', // Primary Gold
          600: '#A87512', // Rich Gold
          700: '#8A5D0E',
          800: '#6A440A',
          900: '#482D06',
        },
        bronze: {
          50: '#faf6f0',
          100: '#f3ebe0',
          200: '#e5d5be',
          300: '#d4ba97',
          400: '#b89260',
          500: '#9c733c',
          600: '#7c572c',
          700: '#5c3f1f',
          800: '#3d2812',
          900: '#1e1307',
        },
        navy: {
          50: '#f4f7fb',
          100: '#e4ebf5',
          200: '#cad7eb',
          300: '#a3bcdd',
          400: '#759bcc',
          500: '#4f7bb8',
          600: '#38609c',
          700: '#2c4b7c',
          800: '#142238',
          900: '#0a1322', // Deep Midnight Navy
          950: '#050a14', // Royal Obsidian
        },
        brand: {
          50: '#FCFAF5',
          100: '#F5E7BF',
          200: '#E8D6A5',
          300: '#DEBF78',
          400: '#D4AF37',
          500: '#C99524', // Primary Gold
          600: '#A87512', // Rich Gold
          700: '#8A5D0E',
          800: '#142238',
          900: '#0a1322',
          950: '#050a14',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        telugu: ['Noto Sans Telugu', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
