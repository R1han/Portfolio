export default function StatCard({ value, label }) {
  return (
    <div className="border-l-2 border-gold pl-4">
      <div className="font-heading text-gold text-3xl font-bold leading-none">{value}</div>
      <div className="font-mono text-xs text-muted mt-1">{label}</div>
    </div>
  )
}
