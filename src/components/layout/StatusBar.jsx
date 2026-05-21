import { useActiveSection } from '../../hooks/useActiveSection'

const sectionFiles = {
  hero: 'hero.jsx',
  about: 'about.rs',
  skills: 'skills.json',
  projects: 'projects.ts',
  experience: 'experience.py',
  certifications: 'certs.md',
  education: 'education.json',
  contact: 'contact.sh',
}

const sections = Object.keys(sectionFiles)

export default function StatusBar() {
  const active = useActiveSection(sections)
  const filename = sectionFiles[active] || 'portfolio'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-status-bar flex items-center justify-between px-3 py-1 font-mono text-[11px] text-white">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-syn-green pulse-dot" />
          Available to Join
        </span>
        <span className="hidden sm:inline text-white/60">⎇ main</span>
        <span className="hidden sm:inline text-white/60">✓ 0 errors</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white/80">{filename}</span>
        <span className="hidden sm:inline text-white/60">UTF-8</span>
        <span className="hidden md:inline text-white/70">UAE · India · Remote · Open to Relocation 🌍</span>
      </div>
    </div>
  )
}
