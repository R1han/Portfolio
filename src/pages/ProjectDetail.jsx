import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="font-mono text-muted text-sm">404 · project not found</span>
        <Link to="/" className="font-mono text-xs text-gold hover:underline">
          ← back_to_home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={12} />
          back_to_projects
        </Link>

        <div className="bg-surface border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 bg-card border-b border-border">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: project.langColor }}
              />
              <span className="font-mono text-xs text-muted">{project.lang}</span>
              <span className="font-mono text-xs text-muted ml-2">{project.slug}.{project.lang.toLowerCase()}</span>
            </div>
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-gold transition-colors"
                >
                  <GithubIcon /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-gold transition-colors"
                >
                  <ExternalLink size={13} /> Demo
                </a>
              )}
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {project.badge && (
              <span className="font-mono text-xs text-syn-orange bg-syn-orange/10 border border-syn-orange/20 px-3 py-1 rounded">
                {project.badge}
              </span>
            )}

            <h1 className="font-heading text-3xl md:text-4xl text-text">{project.title}</h1>
            <p className="font-body text-subtext leading-relaxed">{project.oneLiner}</p>

            <div className="space-y-4">
              <h2 className="font-mono text-sm text-syn-blue">// description</h2>
              <p className="font-body text-subtext leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-2">
              <h2 className="font-mono text-sm text-syn-blue">// impact</h2>
              <p className="font-mono text-xs text-syn-diff bg-syn-diff/5 border border-syn-diff/10 rounded px-4 py-3">
                <span className="mr-2">+</span>{project.impact}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-mono text-sm text-syn-blue">// tech_stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-xs text-muted bg-card border border-border px-3 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
