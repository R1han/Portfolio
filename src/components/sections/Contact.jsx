import { useState } from 'react'
import FileHeader from '../layout/FileHeader'
import Reveal from '../ui/Reveal'
import { Mail, Phone, ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const links = [
  { icon: Mail, label: 'rihansajeer01@gmail.com', href: 'mailto:rihansajeer01@gmail.com' },
  { icon: Phone, label: '+971 567 421 615', href: 'tel:+971567421615' },
  { icon: Phone, label: '+91 628 256 0679', href: 'tel:+916282560679' },
  { icon: GithubIcon, label: 'github.com/R1han', href: 'https://github.com/R1han' },
  { icon: LinkedinIcon, label: 'linkedin.com/in/rihan-sajeer', href: 'https://linkedin.com/in/rihan-sajeer' },
]

const MAILTO = 'mailto:rihansajeer01@gmail.com'

export default function Contact() {
  const [fields, setFields] = useState({ message: '', email: '' })

  const handleChange = (e) => {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio Enquiry')
    const body = encodeURIComponent(`From: ${fields.email}\n\n${fields.message}`)
    window.location.href = `${MAILTO}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <FileHeader filename="contact.sh" title="Get in Touch" lang="Shell" />
          <div className="border border-border border-t-0 rounded-b-lg p-6 md:p-10 bg-bg">
            <span className="font-mono text-xs text-muted block mb-3">// send_message</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-8">
              Let's Build Something
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                {links.map(({ icon: Icon, label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-4 hover:border-gold/50 transition-all duration-200"
                  >
                    <Icon size={18} className="text-gold flex-shrink-0" />
                    <span className="font-mono text-sm text-subtext group-hover:text-text transition-colors group-hover:translate-x-1 transform duration-200">
                      {label}
                    </span>
                    <ExternalLink size={12} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm">
                <div className="space-y-1 mb-4">
                  <p><span className="text-gold">$</span> ./contact.sh --status</p>
                  <p className="text-muted pl-2">→ Rihan Sajeer is open to opportunities</p>
                  <p className="text-muted pl-2">→ Status: available_to_join_immediately</p>
                  <p className="text-muted pl-2">→ Based in: UAE 🇦🇪</p>
                  <p className="text-muted pl-2">→ Open to: UAE · India · Remote · Relocation</p>
                </div>

                <div className="mb-4">
                  <p><span className="text-gold">$</span> ./contact.sh --message</p>
                  <p className="text-muted">Enter your message below:</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-gold mt-2.5 flex-shrink-0">›</span>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="your message here..."
                      required
                      className="flex-1 bg-card border border-border rounded px-3 py-2 text-text text-sm font-mono placeholder-muted focus:outline-none focus:border-gold/60 resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold flex-shrink-0">›</span>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-card border border-border rounded px-3 py-2 text-text text-sm font-mono placeholder-muted focus:outline-none focus:border-gold/60"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-mono text-xs px-5 py-2 rounded bg-gold text-surface font-semibold hover:bg-gold-muted transition-colors"
                  >
                    send_message() ↵
                  </button>
                  <p className="text-muted text-xs">→ Opens your email client with the message pre-filled.</p>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
