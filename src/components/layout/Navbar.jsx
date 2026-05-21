import { useState, useEffect } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Menu, X, Download } from 'lucide-react'

const tabs = [
  { id: 'hero', label: 'hero.jsx', icon: '◈' },
  { id: 'about', label: 'about.rs', icon: '🦀' },
  { id: 'skills', label: 'skills.json', icon: '{}' },
  { id: 'projects', label: 'projects.ts', icon: 'TS' },
  { id: 'experience', label: 'experience.py', icon: '🐍' },
  { id: 'certifications', label: 'certs.md', icon: '#' },
  { id: 'education', label: 'education.json', icon: '{}' },
  { id: 'contact', label: 'contact.sh', icon: '$_' },
]

export default function Navbar() {
  const activeSection = useActiveSection(tabs.map(t => t.id))
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.4)]' : ''}`}>
      <div className="bg-surface border-b border-border px-4 py-2 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-heading text-gold font-bold text-lg leading-none">RS</span>
        <span className="font-mono text-muted text-xs hidden sm:block">rihan-sajeer / portfolio</span>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="/assets/Resume-RihanSajeer.pdf"
            download
            className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 transition-colors"
          >
            <Download size={12} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-1.5 text-muted hover:text-text transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <nav className="bg-surface border-b border-border hidden md:flex overflow-x-auto hide-scrollbar">
        {tabs.map(tab => {
          const isActive = activeSection === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs whitespace-nowrap border-r border-border transition-colors flex-shrink-0
                ${isActive
                  ? 'bg-bg text-text border-t-2 border-t-gold -mt-px'
                  : 'text-muted hover:text-subtext hover:bg-card border-t-2 border-t-transparent -mt-px'
                }`}
            >
              <span className="opacity-60">{tab.icon}</span>
              {tab.label}
            </button>
          )
        })}
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          {tabs.map(tab => {
            const isActive = activeSection === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`w-full flex items-center gap-3 px-5 py-3 font-mono text-sm border-b border-border/50 transition-colors
                  ${isActive ? 'text-gold bg-bg border-l-2 border-l-gold' : 'text-muted hover:text-text hover:bg-card'}`}
              >
                <span className="opacity-60 w-5 text-center">{tab.icon}</span>
                {tab.label}
              </button>
            )
          })}
        </div>
      )}
    </header>
  )
}
