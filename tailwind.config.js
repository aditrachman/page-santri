const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {colors: {
      sky: colors.sky,
      teal: colors.teal,
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

  ],
}
