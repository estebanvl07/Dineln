/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code...
    "./src/**/*.{js,tsx,ts,jsx}",
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    // If you use a `src` folder, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level folders...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
