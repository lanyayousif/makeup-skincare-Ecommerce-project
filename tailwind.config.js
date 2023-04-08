/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "640px" },

        sm: { min: "640px", max: "768px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1024px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1280px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1536px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "bg-main": "#F1D7F2",
        "bg-second": "#80597A",
        "bg-beji": "#DBCFC3",
        "bg-bejiKal": "#F8F3EF",
        "black-text": "#000",
        "white-text": "#fff",
        "purple-text": "#80597A",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      lineHeight: {
        11: "3rem",
        12: "4rem",
        13: "5rem",
        14: "6rem",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
