import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cee6e2",
          200: "#9dccc6",
          300: "#6bb3a9",
          400: "#3a998d",
          500: "#098070",
          600: "#07665a",
          700: "#054d43",
          800: "#04332d",
          900: "#021a16",
        },
      },
    },
  },
  plugins: [],
};
export default config;
