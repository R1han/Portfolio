export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pb-8 pt-6 text-center font-mono text-xs text-muted">
      <span>// built by </span>
      <span className="text-gold">Rihan Sajeer</span>
      <span> · React + Vite + Tailwind · {new Date().getFullYear()}</span>
    </footer>
  )
}
