/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,
    colors: {

      rose: "#fb7185",
      darkSlate: "#0f172a",
      lightGray: "#f9f9f9",
      white: "#fff",
      dark: "#000",
      darkGray: "#B3B3B3",
      lightBlue: "#508AEF",
      nudeBlue: "#ECF5FF",
      deepBlue: "#000060"

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}