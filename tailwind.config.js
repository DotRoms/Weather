/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2022/08/10/18/57/lake-7377942_1280.jpg')",
      },
    },
  },
  plugins: [],
};
