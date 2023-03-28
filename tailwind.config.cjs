/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C2B35",

          secondary: "#FF9900",

          accent: "#FFE0B3",

          neutral: "#FF3030",

          "base-100": "#EFEFF0",

          info: "#3697D3",

          success: "#70DB9F",

          warning: "#FABD14",

          error: "#EC7B69",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
