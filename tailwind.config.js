/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fustat: ["Fustat", "sans-serif"],
      },
      colors: {
        brandPrimary: {
          DEFAULT: "var(--primary)",
          100: "#eae6ff",
          200: "#f1eeff",
          300: "#8976ff",
          400: "#f8f7ff",
          500: "#f7f8fa",
          600: "#f1effe",
        },
        dark: {
          DEFAULT: "#222f36",
        },
        grey: {
          DEFAULT: "#98A5C3",
          100: "#61748f",
          200: "#e6eff1",
          300: "#f5f6fa",
          400: "#f3f2f9",
          500: "#e4ecf2",
          600: "#e2e6f1",
          700: "#f2f2f2",
          800: "#f7f9fb",
        },
      },
    },
  },
  plugins: [],
};
