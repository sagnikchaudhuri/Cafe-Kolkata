/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fff8ee',
          100: '#f6ead6',
          200: '#e8d1ac',
          300: '#d4ac78',
          400: '#ba7f45',
          500: '#94592e',
          600: '#764323',
          700: '#59331f',
          800: '#3d2418',
          900: '#25170f',
        },
        saffron: '#d99a34',
        rosewood: '#7f2d1d',
      },
      boxShadow: {
        glow: '0 24px 70px rgba(61, 36, 24, 0.22)',
        soft: '0 18px 45px rgba(37, 23, 15, 0.12)',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
