import FileHeader from '../layout/FileHeader'
import Reveal from '../ui/Reveal'
import { certifications, achievements } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="certs.md" title="Certifications" lang="Markdown" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// certifications</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              Credentials &amp; Recognition
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-2 h-full">
                    <span className="font-mono text-xs text-gold">{cert.issuer}</span>
                    <span className="font-body text-sm text-text leading-snug">{cert.title}</span>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-mono text-xs text-muted">{cert.year}</span>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-gold/70 hover:text-gold border border-gold/30 hover:border-gold/60 rounded px-2 py-0.5 transition-colors"
                        >
                          verify ↗
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-3 bg-card border border-gold/20 rounded-lg px-5 py-4">
                    <span className="text-2xl">{a.icon}</span>
                    <div>
                      <span className="font-mono text-xs text-gold block">{a.title}</span>
                      <span className="font-body text-sm text-text">{a.event}</span>
                      {a.detail && (
                        <span className="font-mono text-xs text-muted block">{a.detail}</span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
