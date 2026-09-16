import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F3",
        ink: "#14213D",
        brand: {
          DEFAULT: "#FF5C39",
          dark: "#E14A2A",
          light: "#FFE3D9",
        },
        gold: "#FFB627",
        mint: "#1B998B",
        slate: {
          soft: "#6B7280",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        body: ["var(--font-inter)"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
