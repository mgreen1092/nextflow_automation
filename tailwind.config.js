/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Structural background (Deep Slate)
        primary: "var(--color-deep-slate)",
        // Primary text (Dark Text)
        ink: "var(--color-text-dark)",
        // Page background
        mist: "var(--color-bg-light)",
        // Secondary text (Muted Gray)
        slate: "var(--color-text-muted)",
        // Primary brand accent (Indigo)
        accent: "var(--color-indigo)",
        "accent-dark": "var(--color-indigo-dark)",
        // Secondary accent (Violet)
        "accent-light": "var(--color-violet)",
        // Light grays for subtle text
        "light-gray": "var(--color-light-text-on-dark)",
        "soft-gray": "var(--color-soft-gray)",
        // Subtle borders / dividers
        border: "var(--border-subtle)",
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.18)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
