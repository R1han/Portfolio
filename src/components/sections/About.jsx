import FileHeader from '../layout/FileHeader'
import Gutter from '../layout/Gutter'
import StatCard from '../ui/StatCard'
import SyntaxChip from '../ui/SyntaxChip'
import Reveal from '../ui/Reveal'

const stats = [
  { value: '2+', label: 'years_experience' },
  { value: '3', label: 'cloud_platforms' },
  { value: '9.32', label: 'btech_gpa' },
  { value: '10+', label: 'products_shipped' },
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

            <div className="grid grid-cols-1 gap-10 items-start">
              <div className="flex gap-0">
                <Gutter startLine={1} count={30} />
                <div className="flex flex-col gap-5">
                  <p className="font-body text-subtext leading-relaxed">
                    I'm an <SyntaxChip color="syn-orange">AI Systems Developer</SyntaxChip> &amp;{' '}
                    <SyntaxChip color="syn-blue">Backend Engineer</SyntaxChip> with{' '}
                    <SyntaxChip color="syn-green">2+ years</SyntaxChip> of hands-on experience
                    architecting production-grade, scalable systems across cloud-native,
                    multi-service environments.
                  </p>
                  <p className="font-body text-subtext leading-relaxed">
                    I specialise in designing intelligent end-to-end architectures — from{' '}
                    <SyntaxChip color="syn-blue">LLM integrations</SyntaxChip> and{' '}
                    <SyntaxChip color="syn-green">RAG pipelines</SyntaxChip> to{' '}
                    <SyntaxChip color="syn-orange">agentic systems</SyntaxChip> — with a focus on
                    automation-driven, enterprise-grade delivery and rapid high-impact iterations
                    for mission-critical startup deployments.
                  </p>
                  <p className="font-body text-subtext leading-relaxed">
                    I've collaborated with enterprise clients, UI/UX teams, and stakeholders to
                    ship reliable, real-time applications across{' '}
                    <SyntaxChip color="syn-blue">AWS · GCP · Azure</SyntaxChip>. I'm based in the
                    UAE and open to opportunities worldwide.
                  </p>
                  <p className="font-body text-subtext leading-relaxed">
                    On the backend, I design{' '}
                    <SyntaxChip color="syn-orange">microservice architectures</SyntaxChip> with a
                    strong emphasis on observability, fault tolerance, and{' '}
                    <SyntaxChip color="syn-green">DevOps</SyntaxChip> — CI/CD pipelines,
                    containerisation, and infrastructure-as-code are core to how I ship.
                  </p>

                  <div className="font-mono text-xs leading-6 text-muted mt-1 flex flex-col gap-0.5">
                    <span className="text-syn-blue">fn</span>
                    {' '}
                    <span className="text-text">current_focus</span>
                    {'() -> Vec<&str> {'}
                    <div className="pl-4 flex flex-col gap-0.5">
                      <span><span className="text-syn-green">"Multi-agent &amp; agentic AI systems"</span>,</span>
                      <span><span className="text-syn-blue">"LLM fine-tuning &amp; RAG optimisation"</span>,</span>
                      <span><span className="text-syn-orange">"Cloud-native microservices at scale"</span>,</span>
                      <span><span className="text-syn-green">"Real-time data pipelines &amp; automation"</span>,</span>
                    </div>
                    <span>{'}'}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
                    {stats.map(s => (
                      <StatCard key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
