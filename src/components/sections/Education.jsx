import FileHeader from '../layout/FileHeader'
import Reveal from '../ui/Reveal'

const education = [
  {
    degree: 'B.Tech Computer Science &amp; Engineering',
    institution: 'SCMS School of Engineering &amp; Technology, Cochin',
    gpa: '9.32 / 10',
    year: '2020 – 2024',
    leadership: 'IEEE Vice Chair · YI Yuva Chair',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="education.json" title="Education" lang="JSON" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// education</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              Academic Background
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
                    <span
                      className="font-heading text-lg text-text leading-snug"
                      dangerouslySetInnerHTML={{ __html: e.degree }}
                    />
                    <span
                      className="font-body text-sm text-subtext"
                      dangerouslySetInnerHTML={{ __html: e.institution }}
                    />
                    {e.gpa && (
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-muted">GPA:</span>
                        <span className="text-gold">{e.gpa}</span>
                      </div>
                    )}
                    {e.year && (
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-muted">Year:</span>
                        <span className="text-subtext">{e.year}</span>
                      </div>
                    )}
                    {e.leadership && (
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-muted">Leadership:</span>
                        <span className="text-syn-teal">{e.leadership}</span>
                      </div>
                    )}
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
