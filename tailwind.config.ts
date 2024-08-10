import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js.ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#F2F0F2",
      },
      spacing: {
        "191": "766px",
        "320": "1280px",
        "360": "1440px",
        "flex-0-0-5": "flex: 0 0 50%",
        "5xl": "50px",
      },
      borderRadius: {
        "5xl": "50px",
      },
      fontSize: {
        "13.5": "54px",
      },
    },
  },
  plugins: [],
};
export default config;
