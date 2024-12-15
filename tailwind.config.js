/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'show': 'fadeIn 1s ease-in',
         'hide': 'fadeOut 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { width: 0 },
          '100%': { width: "50%" }
        },
        fadeOut: {
          '0%': { width: "50%" },
          '100%': { width: 0 }
        }
    },
  },
  plugins: [],
}
}
