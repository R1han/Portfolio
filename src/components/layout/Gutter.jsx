export default function Gutter({ startLine = 1, count = 40 }) {
  return (
    <div className="hidden md:flex flex-col w-[52px] flex-shrink-0 pt-1 select-none" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="font-mono text-xs text-muted text-right pr-4 leading-6">
          {startLine + i}
        </span>
      ))}
    </div>
  )
}
