/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#052754',
        customGreen: '#10B981'
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      backgroundImage: {
        'custom-image': "url('images/servicios.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
