import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        "md+": "900px",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      current: "currentColor",
      base: "var(--color-base)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      error: "var(--color-error)",
      "base-dark": "var(--color-base-dark)",
      "primary-dark": "var(--color-primary-dark)",
      "secondary-dark": "var(--color-secondary-dark)",
      "accent-dark": "var(--color-accent-dark)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
