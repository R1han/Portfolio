import FileHeader from '../layout/FileHeader'
import Gutter from '../layout/Gutter'
import StatCard from '../ui/StatCard'
import SyntaxChip from '../ui/SyntaxChip'
import Reveal from '../ui/Reveal'

const stats = [
  { value: '2+', label: 'years_experience' },
  { value: '3', label: 'cloud_platforms' },
  { value: '9.32', label: 'btech_gpa' },
  { value: '366', label: 'teams_beaten' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="about.rs" title="Who I Am" lang="Rust" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// about_me</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              Building Systems That Think &amp; Act
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
              <div className="flex gap-0">
                <Gutter startLine={1} count={20} />
                <div className="flex flex-col gap-5">
                  <p className="font-body text-subtext leading-relaxed">
                    I'm an AI Systems Developer with{' '}
                    <SyntaxChip color="syn-orange">2+ years</SyntaxChip> of experience building
                    production-grade{' '}
                    <SyntaxChip color="syn-blue">LLM integration</SyntaxChip> and{' '}
                    <SyntaxChip color="syn-green">agentic workflows</SyntaxChip> that solve real
                    business problems.
                  </p>
                  <p className="font-body text-subtext leading-relaxed">
                    I work across the full stack — from designing multi-agent architectures and RAG
                    pipelines to deploying them on{' '}
                    <SyntaxChip color="syn-blue">AWS · Azure · GCP</SyntaxChip>. My systems have
                    reduced resolution times, cut cloud costs, and shipped to production at scale.
                  </p>
                  <p className="font-body text-subtext leading-relaxed">
                    Hackathon-tested under pressure — I helped beat{' '}
                    <SyntaxChip color="syn-green">366 teams</SyntaxChip> at Deriv AI Hackathon 2026.
                    I'm based in the UAE and open to opportunities worldwide.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
                    {stats.map(s => (
                      <StatCard key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-start justify-center">
                <div className="relative w-56 h-64">
                  <div className="absolute inset-0 rounded-lg border border-gold/40 bg-card flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-card to-surface flex items-center justify-center">
                      <span className="font-heading text-5xl text-gold/30 select-none">RS</span>
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 font-mono text-gold text-lg leading-none select-none">⌐</span>
                  <span className="absolute bottom-2 right-2 font-mono text-gold text-lg leading-none select-none">¬</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
