/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "#39ACDE",
        secondary: "#16C172",
        tertiary: "#09E85E",
        dark: "#16262E",
      },
      width: {
        "9/10": "90%",
        "32px": "25px",
      },
      height: {
        "3px": "3px",
        "24px": "25px",
        400: "400px",
      },
      padding: {
        "1/10": "10%",
        "5p": "5%",
      },
      animation: {
        vibration: "vibration 0.5s linear infinite",
      },
      gridTemplateColumns: {
        "60/40": "60% 40%",
        "40/60": "40% 60%",
        header: "20% auto",
        footer: "auto 1.5fr 1.5fr",
      },
      backgroundImage: {
        "2sec": "url('/bg-fuzzion.webp')",
      },
      boxShadow: {
        card: "0px 5px 20px 0px rgba(0,0,0,0.1);",
      },
      maxHeight: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
