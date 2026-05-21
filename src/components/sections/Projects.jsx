import FileHeader from '../layout/FileHeader'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="projects.ts" title="Featured Work" lang="TypeScript" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// featured_work</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              What I've Built
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.06}>
                  <ProjectCard project={project} featured={project.featured} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
