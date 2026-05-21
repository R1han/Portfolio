import FileHeader from '../layout/FileHeader'
import Gutter from '../layout/Gutter'
import SkillChip from '../ui/SkillChip'
import Reveal from '../ui/Reveal'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="skills.json" title="Tech Stack" lang="JSON" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// tech_stack</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              The Tools I Reach For
            </h2>

            <div className="flex gap-0">
              <Gutter startLine={1} count={Object.keys(skills).length + 4} />
              <div className="flex-1 font-mono text-sm">
                <div className="text-muted mb-3">{'{'}</div>
                <div className="space-y-4 pl-4 md:pl-8">
                  {Object.entries(skills).map(([key, { color, items }], i) => (
                    <Reveal key={key} delay={i * 0.07}>
                      <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
                        <span className="text-syn-blue flex-shrink-0">"{key}":</span>
                        <span className="text-muted flex-shrink-0">[</span>
                        <div className="flex flex-wrap gap-2 items-center">
                          {items.map(item => (
                            <SkillChip key={item} color={color}>{item}</SkillChip>
                          ))}
                        </div>
                        <span className="text-muted flex-shrink-0">]</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="text-muted mt-3">{'}'}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
