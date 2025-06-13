export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#1e90ff',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lugos: ['Lugos', 'sans-serif'],
      },      animation: {
        'fade-in-up': 'fadeInUp 2s ease-out both',
        'typewriter': 'typewriter 4s steps(30, end) forwards',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        typewriter: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
    },
  },
  plugins: [],
};