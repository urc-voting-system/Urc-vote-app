/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8396D3",
        darkVariant: "#000000b3",
      },
    },
  },
  plugins: [],
};
