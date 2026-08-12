/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        obsidian: '#0a0a0c',
        surface: '#121216',
        panel: '#181820',
        hairline: '#262630',
        cyan: '#00e5ff',
        gold: '#f59e0b',
        emerald: '#10b981',
        alert: '#ef4444',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
}
