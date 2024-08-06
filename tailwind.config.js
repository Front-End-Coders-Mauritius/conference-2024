/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.{js,vue,ts,md}',
    './content/**/*.{js,vue,ts,md}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f2f7fd',
          100: '#e4eefa',
          200: '#c2dcf5',
          300: '#8dc1ec',
          400: '#4f9fe1',
          500: '#2984ce',
          600: '#1c6fbc',
          700: '#16528e',
          800: '#164676',
          900: '#183d62',
          950: '#102641',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
