export default function FileHeader({ filename, title, lang }) {
  return (
    <div className="flex items-center justify-between bg-surface border border-border rounded-t px-4 py-2 mb-0 font-mono text-xs">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-gold">{filename}</span>
        {title && <span className="text-muted">— {title}</span>}
      </div>
      {lang && (
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card border border-border text-subtext">
          {lang}
        </span>
      )}
    </div>
  )
}
