/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          200: '#99C8FF',
          300: '#66ADFF',
          400: '#3391FF',
          500: '#0076FF', // Primary blue
          600: '#005ECC',
          700: '#004799',
          800: '#002F66',
          900: '#001833',
        },
        secondary: {
          50: '#E6FAFA',
          100: '#CCF5F6',
          200: '#99EBED',
          300: '#66E0E3',
          400: '#33D6DA',
          500: '#00CCD1', // Secondary teal
          600: '#00A3A7',
          700: '#007A7D',
          800: '#005254',
          900: '#00292A',
        },
        accent: {
          50: '#FFF1E6',
          100: '#FFE3CC',
          200: '#FFC799',
          300: '#FFAB66',
          400: '#FF8F33',
          500: '#FF7300', // Accent orange
          600: '#CC5C00',
          700: '#994500',
          800: '#662E00',
          900: '#331700',
        },
        dark: {
          100: '#d5d6db',
          200: '#acaeb7',
          300: '#828593',
          400: '#595d6f',
          500: '#2f344b',
          600: '#252a3c',
          700: '#1c1f2d',
          800: '#12151e',
          900: '#090a0f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'skill': '0 4px 6px rgba(0, 118, 255, 0.1)',
        'skill-hover': '0 10px 15px rgba(0, 118, 255, 0.2)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};