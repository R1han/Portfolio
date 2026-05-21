import FileHeader from '../layout/FileHeader'
import ExpBlock from '../ui/ExpBlock'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="experience.py" title="Work History" lang="Python" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// work_history</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              Where I've Shipped
            </h2>

            <div className="flex flex-col gap-4">
              {experience.map((role, i) => (
                <Reveal key={role.company} delay={i * 0.1}>
                  <ExpBlock role={role} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
