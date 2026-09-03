/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // "Refined Dark" / "Refined Light" design tokens — values come from
        // CSS custom properties (see src/index.css) so the same class names
        // (bg-surface, text-fg, etc.) resolve to different colors per theme
        // instead of needing dark:/light: variants sprinkled everywhere.
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          // Fixed, NOT theme-dependent: the text/icon color used on top of
          // an accent-filled background (buttons, etc). Always a dark ink
          // tone regardless of theme, because bg-accent is always paired
          // with dark text for contrast — don't use this for anything else.
          ink: "#171310",
        },
        surface: {
          DEFAULT: "var(--color-surface)", // page background
          raised: "var(--color-surface-raised)", // card/panel background
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
        fg: {
          DEFAULT: "var(--color-fg)", // headings / primary text
          subtle: "var(--color-fg-subtle)", // body paragraphs
          muted: "var(--color-fg-muted)", // secondary/meta text
        },
      },
      fontFamily: {
        // Display serif for names/headings, Manrope for everything else.
        display: ['"Newsreader"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
