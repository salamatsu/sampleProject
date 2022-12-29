/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
