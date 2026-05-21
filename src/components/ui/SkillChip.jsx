export default function SkillChip({ children, color = 'syn-blue' }) {
  const colorMap = {
    'syn-blue': 'text-syn-blue border-syn-blue/30 hover:bg-syn-blue/10',
    'syn-green': 'text-syn-green border-syn-green/30 hover:bg-syn-green/10',
    'syn-orange': 'text-syn-orange border-syn-orange/30 hover:bg-syn-orange/10',
    'syn-purple': 'text-syn-purple border-syn-purple/30 hover:bg-syn-purple/10',
    'syn-teal': 'text-syn-teal border-syn-teal/30 hover:bg-syn-teal/10',
    gold: 'text-gold border-gold/30 hover:bg-gold/10',
  }
  return (
    <span className={`inline-flex items-center font-mono text-xs px-3 py-1 rounded-full border transition-colors cursor-default ${colorMap[color] ?? colorMap['syn-blue']}`}>
      {children}
    </span>
  )
}
