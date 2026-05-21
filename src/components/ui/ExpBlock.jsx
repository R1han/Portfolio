import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ExpBlock({ role }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="flex items-start justify-between px-5 py-4 bg-surface">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-sm text-syn-purple">
            class <span className="text-syn-blue">{role.company}</span>:
          </span>
          <span className="font-heading text-lg text-text mt-1">{role.role}</span>
          <span className="font-mono text-xs text-muted">{role.displayName} · {role.location}</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="font-mono text-xs text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded">
            {role.period}
          </span>
          <button
            onClick={() => setOpen(o => !o)}
            className="text-muted hover:text-gold transition-colors"
            aria-label="Toggle details"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="px-5 py-4 space-y-2 border-t border-border">
              {role.achievements.map((a, i) => (
                <li key={i} className="flex gap-2 font-mono text-xs text-syn-diff bg-syn-diff/5 border border-syn-diff/10 rounded px-3 py-2">
                  <span className="text-syn-diff flex-shrink-0">+</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-4 flex flex-wrap gap-2">
              {role.stack.map(s => (
                <span key={s} className="font-mono text-[11px] text-muted bg-surface border border-border px-2 py-0.5 rounded">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
