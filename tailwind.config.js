/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDF8EE',
          100: '#F9EDDA',
          200: '#F0D7AF',
          300: '#E5BE7E',
          400: '#D4A05A',
          500: '#9A7235',
          600: '#7A5A25',
          700: '#5E4419',
          800: '#44310F',
          900: '#2D2008',
        },
        cream: {
          50:  '#FFFDF7',
          100: '#FAF6EE',
          200: '#F5EDD8',
          300: '#EDE2C8',
          400: '#E0D2B0',
          500: '#D0BE98',
        },
        charcoal: {
          50:  '#F5F0E8',
          100: '#E8DFD0',
          200: '#C8BEA8',
          300: '#B0A090',
          400: '#9A8870',
          500: '#7A6850',
          600: '#5A4A38',
          700: '#3D3028',
          800: '#2A2018',
          900: '#1A140F',
        },
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        display:['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 24px rgba(154,114,53,0.12)',
        card: '0 2px 12px rgba(42,32,24,0.06)',
        'card-hover': '0 8px 32px rgba(42,32,24,0.09)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg,#9A7235 0%,#C4974E 50%,#9A7235 100%)',
        'gold-fade':    'linear-gradient(135deg,rgba(154,114,53,0.08),rgba(154,114,53,0.02))',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-right':'slideRight 0.6s ease forwards',
        'scale-in':   'scaleIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp:    { '0%':{opacity:'0',transform:'translateY(24px)'},'100%':{opacity:'1',transform:'translateY(0)'} },
        fadeIn:    { '0%':{opacity:'0'},'100%':{opacity:'1'} },
        slideRight: { '0%':{opacity:'0',transform:'translateX(-20px)'},'100%':{opacity:'1',transform:'translateX(0)'} },
        scaleIn:    { '0%':{opacity:'0',transform:'scale(0.95)'},'100%':{opacity:'1',transform:'scale(1)'} },
      },
    },
  },
  plugins: [],
}
