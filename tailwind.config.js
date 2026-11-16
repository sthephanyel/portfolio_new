/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // tokens do novo visual (dark, estilo produto dev)
        bg: {
          DEFAULT: '#08090b',
          raised: '#0f1114',
          card: '#111418',
        },
        line: {
          DEFAULT: '#1f242b',
          strong: '#2e353f',
        },
        ink: {
          DEFAULT: '#ecedee',
          muted: '#9aa3ad',
          faint: '#6b7480',
        },
        accent: {
          DEFAULT: '#3ddc97',
          strong: '#00b37e',
          soft: 'rgba(61, 220, 151, 0.12)',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(61,220,151,.35), 0 8px 40px -12px rgba(61,220,151,.35)',
      },
    },
  },
  plugins: [],
}
