export default function SyntaxChip({ children, color = 'syn-blue' }) {
  const colorMap = {
    'syn-blue': 'text-syn-blue bg-syn-blue/10 border-syn-blue/20',
    'syn-green': 'text-syn-green bg-syn-green/10 border-syn-green/20',
    'syn-orange': 'text-syn-orange bg-syn-orange/10 border-syn-orange/20',
    'syn-purple': 'text-syn-purple bg-syn-purple/10 border-syn-purple/20',
    'syn-teal': 'text-syn-teal bg-syn-teal/10 border-syn-teal/20',
    gold: 'text-gold bg-gold/10 border-gold/20',
  }
  return (
    <span className={`inline-flex items-center font-mono text-xs px-2 py-0.5 rounded border ${colorMap[color] ?? colorMap['syn-blue']}`}>
      {children}
    </span>
  )
}
