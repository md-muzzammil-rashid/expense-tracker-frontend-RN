/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'custom-gradient-1': 'linear-gradient(30deg, rgba(15,7,56,1) 0%, rgba(35,5,85,1) 20%, rgba(85,9,121,1) 35%, rgba(195,34,55,1) 68%, rgba(218,125,52,1) 80%, rgba(255,184,46,1) 100%)',
      },
      colors: {
        primary: {
          DEFAULT: "#F6F6F6",
        },
        secondary: {
          DEFAULT: "#000000",
        },
        btn: {
          DEFAULT: "#1B1B1B",
        },
        credit:{
          DEFAULT: "#40C46E",
        },
        debit:{
          DEFAULT: "#42464C",
        }
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        poppins:["Poppins" , "sans-serif"],

      },
      textColor:{
        primary: {
          DEFAULT: "#1C1C1C",
        },
        secondary: {
          DEFAULT: "#B1B3BA",
        },
      }
    },
  },
  darkMode: 'media',
  plugins: [],
}

