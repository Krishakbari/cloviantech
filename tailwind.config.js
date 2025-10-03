/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"], // ✅ added Inter
      },
    },
  },
  plugins: [],
}
