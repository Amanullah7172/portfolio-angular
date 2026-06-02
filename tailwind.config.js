module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        surface: '#0f172a',
        surface2: '#111827',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 30%), linear-gradient(180deg, #020617 0%, #0f172a 100%)',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(99,102,241,0.16)',
        soft: '0 18px 40px rgba(15,23,42,0.2)',
      },
      letterSpacing: {
        widest: '0.28em',
      },
    },
  },
  plugins: [],
};
