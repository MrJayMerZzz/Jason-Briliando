/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // Include components
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ (if using App Router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
