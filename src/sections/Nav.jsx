import { GitHubIcon } from '../components/icons.jsx'
import { UkladMark } from '../components/UkladMark.jsx'

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Uklad — back to top">
          <UkladMark size={17} />
        </a>
        <nav className="nav__links" aria-label="Sections">
          <a href="#agents">Agents</a>
          <a href="#loop">The loop</a>
          <a href="#code">Code</a>
          <a href="#humans">Humans</a>
          <a href="#quickstart">Quick start</a>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--ghost btn--sm" href="https://github.com/ukladjs/agent-toolkit" target="_blank" rel="noreferrer">Toolkit</a>
          <a
            className="btn btn--solid btn--sm"
            href="https://github.com/ukladjs/uklad"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon size={15} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}
