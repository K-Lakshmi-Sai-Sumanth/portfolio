import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#ecfeff",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7"
        }
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, #38bdf8, #0f172a 55%, #020617)"
      }
    }
  },
  plugins: []
};

export default config;
