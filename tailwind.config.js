/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        md: "80rem",
      },
      sizing: {
        128: "50rem",
      },
    },
  },
  plugins: [],
};
