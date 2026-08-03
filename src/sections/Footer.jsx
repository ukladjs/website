import { UkladMark } from '../components/UkladMark.jsx'

const REPO = 'https://github.com/ukladjs/uklad'

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Overview', href: `${REPO}#readme`, external: true },
      { label: 'Authoring rules', href: `${REPO}/blob/main/docs/architecture/application-authoring-rules.md`, external: true },
      { label: 'App structure', href: `${REPO}/blob/main/docs/architecture/canonical-app-structure.md`, external: true },
      { label: 'TodoMVC example', href: `${REPO}/tree/main/examples/todomvc`, external: true },
    ],
  },
  {
    title: 'For agents',
    links: [
      { label: 'Agent Toolkit', href: 'https://github.com/ukladjs/agent-toolkit', external: true },
      { label: 'DevTools', href: `${REPO}/tree/main/packages/devtools`, external: true },
      { label: 'DevTools MCP', href: `${REPO}/tree/main/packages/devtools-mcp`, external: true },
      { label: 'Agent workflow', href: `${REPO}/blob/main/docs/agent-development/workflow.md`, external: true },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: REPO, external: true },
      { label: 'Roadmap', href: `${REPO}/blob/main/docs/roadmaps/uklad.md`, external: true },
      { label: 'Re-frame parity', href: `${REPO}/blob/main/docs/compatibility/re-frame-parity.md`, external: true },
      { label: 'MIT License', href: `${REPO}/blob/main/LICENSE`, external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <UkladMark size={18} />
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
          © {new Date().getFullYear()} Uklad. Handcrafted by flexsurfer. Road-tested by agents.
        </small>
      </div>
    </footer>
  )
}
