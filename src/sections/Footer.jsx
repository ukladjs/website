import { ReflexMark } from '../components/ReflexMark.jsx'

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Documentation', href: '/docs/' },
      { label: 'Quick Start', href: '/docs/quick-start' },
      { label: 'Best Practices', href: '/docs/best-practices' },
      { label: 'Testing', href: '/docs/testing' },
    ],
  },
  {
    title: 'For agents',
    links: [
      { label: 'AI Coding (llms.txt)', href: '/docs/ai-coding' },
      { label: 'AI Debugging (MCP)', href: '/docs/ai-debugging' },
      { label: 'DevTools', href: '/docs/devtools' },
      { label: 'llms.txt (raw)', href: 'https://raw.githubusercontent.com/flexsurfer/reflex/main/llms.txt', external: true },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: 'https://github.com/flexsurfer/reflex', external: true },
      { label: 'Roadmap', href: 'https://github.com/flexsurfer/reflex/blob/main/ROADMAP.md', external: true },
      { label: 'DevTools repo', href: 'https://github.com/flexsurfer/reflex-devtools', external: true },
      { label: 'MIT License', href: 'https://github.com/flexsurfer/reflex/blob/main/LICENSE', external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <ReflexMark size={18} />
          <p className="footer__motto">No fate but what we make.</p>
          <p className="footer__blurb">
            Agent-first state management for React &amp; React Native — the re-frame
            architecture: indexed, pure, typed, and observable at runtime.
          </p>
        </div>
        <div className="footer__columns">
          {columns.map(({ title, links }) => (
            <div key={title} className="footer__col">
              <h3 className="footer__col-title">{title}</h3>
              <ul>
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      className="footer__link"
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__meta">
        <small>
          © {new Date().getFullYear()} Reflex. Handcrafted by flexsurfer. Road-tested by agents.
        </small>
      </div>
    </footer>
  )
}
