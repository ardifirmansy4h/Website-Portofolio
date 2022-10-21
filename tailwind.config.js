/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4f826f',
        second: '#1e293b',
        third: '#64748b',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
