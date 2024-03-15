import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      screens: {
        'xsm': '500px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        logo: {
          300: '#3c4832',
          400: '#2d1f12',
        },
        bg: {
          200: '#fcf9fc',
          300: '#e7ecf2',
          400: '#d1dfe8',
          500: '#a8c2d3',
        },
      },
      keyframes: {
        fadein: {
          "0%": { transform: 'translateY(-20px)', opacity: '0' },
          "20%": { opacity: '0'},
          "100%": { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        fadein: 'fadein 2.5s ease-in-out',
      }
    },
  },
  
  plugins: [
    headlessuiPlugin,
    plugin(function({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
} satisfies Config
