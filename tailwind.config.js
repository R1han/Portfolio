/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1E1E2E',
        surface: '#181825',
        card: '#24243E',
        border: '#313244',
        text: '#CDD6F4',
        subtext: '#A6ADC8',
        muted: '#6C7086',
        gold: '#C9A06C',
        'gold-muted': '#A97C50',
        'status-bar': '#6B4820',
        'syn-green': '#A6E3A1',
        'syn-blue': '#89B4FA',
        'syn-purple': '#CBA6F7',
        'syn-orange': '#FAB387',
        'syn-teal': '#94E2D5',
        'syn-diff': '#C3E88D',
      },
      fontFamily: {
        heading: ['Rufina', 'serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(54px, 8vw, 96px)',
      },
    },
  },
  plugins: [],
}

