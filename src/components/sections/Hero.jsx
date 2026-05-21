import { motion } from 'framer-motion'
import CodeCard from '../ui/CodeCard'

const item = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(201,160,108,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.span {...item(0.1)} className="font-mono text-xs text-syn-green uppercase tracking-widest">
            → AI Systems Developer &amp; Backend Engineer
          </motion.span>

          <motion.h1
            {...item(0.2)}
            className="font-heading text-gold leading-none"
            style={{ fontSize: 'clamp(54px, 8vw, 96px)' }}
          >
            RIHAN SAJEER
          </motion.h1>

          <motion.p {...item(0.3)} className="font-body text-subtext text-lg leading-relaxed max-w-[460px]">
            Building production AI systems that think and act.<br />
            LLM integrations, agentic workflows, and cloud-native backends.
          </motion.p>

          <motion.div {...item(0.4)} className="flex flex-col gap-2">
            <span className="flex items-center gap-2 font-mono text-xs text-syn-green bg-syn-green/10 border border-syn-green/20 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-syn-green pulse-dot" />
              STATUS: AVAILABLE_TO_JOIN_IMMEDIATELY
            </span>
            <span className="font-mono text-xs text-muted pl-1">
              UAE · India · Remote · Open to Relocate
            </span>
          </motion.div>

          <motion.div {...item(0.5)} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-6 py-3 rounded bg-gold text-surface font-semibold hover:bg-gold-muted transition-colors"
            >
              View Work →
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-6 py-3 rounded border border-gold text-gold hover:bg-gold/10 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/assets/Resume-RihanSajeer.pdf"
              download
              className="font-mono text-sm px-6 py-3 rounded border border-gold/50 text-gold/80 hover:text-gold hover:border-gold transition-colors"
            >
              ↓ Resume
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
