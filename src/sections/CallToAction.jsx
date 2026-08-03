import { CopyButton } from '../components/CopyButton.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ArrowRightIcon, GitHubIcon } from '../components/icons.jsx'

const INSTALL = 'npm install @flexsurfer/reflex'

export function CallToAction() {
  return (
    <section className="section cta" id="cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <Reveal>
          <p className="cta__motto">there is no fate but what we make</p>
          <h2 className="cta__title">
            Ship <span className="cta__title-accent">without fear.</span>
          </h2>
          <p className="cta__copy">
            Your app gets an architecture. Your agent gets a feedback loop.
            You get to review one pure function at a time — and keep your weekends.
          </p>
          <div className="cta__actions">
            <a className="btn btn--primary" href="/docs/">
              Read the docs
              <ArrowRightIcon size={16} />
            </a>
            <a className="btn btn--ghost" href="https://github.com/flexsurfer/reflex" target="_blank" rel="noreferrer">
              <GitHubIcon size={16} />
              Star on GitHub
            </a>
          </div>
          <div className="install-pill install-pill--center">
            <code>
              <span className="install-pill__prompt">$</span> {INSTALL}
            </code>
            <CopyButton text={INSTALL} label="Copy install command" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
