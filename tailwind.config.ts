import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        sand: "var(--color-sand)",
        mist: "var(--color-mist)",
        line: "var(--color-line)",
        accent: "var(--color-accent)"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(15, 15, 15, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
