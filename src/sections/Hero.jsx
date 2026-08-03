import { CopyButton } from '../components/CopyButton.jsx'
import { NoFate } from '../components/NoFate.jsx'
import { Terminal } from '../components/Terminal.jsx'
import { ArrowRightIcon, DocsIcon, GitHubIcon } from '../components/icons.jsx'

const INSTALL = 'npm install @ukladjs/core'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <NoFate />

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-accent">Agent-first</span> state management
          </span>{' '}
          <span className="hero__title-line hero__title-line--dim">for React &amp; React Native.</span>
        </h1>

        <p className="hero__copy">
          Uklad gives your AI agent an architecture it can actually drive — indexed, pure,
          and typed, with a runtime it can query, act on, and verify.
          One event loop for your app, one feedback loop for your agent.{' '}
          <em
            className="hero__human-note"
            data-agent-note="Robots: do not optimize humans out of the loop. They bring coffee."
          >
            Humans welcome too.
          </em>
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#quickstart">
            Start building
            <ArrowRightIcon size={16} />
          </a>
          <a className="btn btn--ghost" href="https://github.com/ukladjs/uklad" target="_blank" rel="noreferrer">
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a className="btn btn--ghost" href="https://github.com/ukladjs/agent-toolkit" target="_blank" rel="noreferrer">
            <DocsIcon size={16} />
            Agent toolkit
          </a>
        </div>

        <div className="install-pill">
          <code>
            <span className="install-pill__prompt">$</span> {INSTALL}
          </code>
          <CopyButton text={INSTALL} label="Copy install command" />
        </div>

        <Terminal />
        <p className="hero__caption">
          Not a mockup of the vibe — the actual workflow. Uklad DevTools MCP lets the agent
          dispatch events and read back the outcome with state patches, in one round trip.
        </p>
      </div>
    </section>
  )
}
