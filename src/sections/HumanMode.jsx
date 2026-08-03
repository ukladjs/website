import { Reveal } from '../components/Reveal.jsx'
import { ComparisonTable } from './ComparisonTable.jsx'

// The original, pre-agent pitch — preserved with love (and light museum labeling).
const classics = [
  {
    stamp: 'HUMAN TESTED',
    title: 'Predictable events',
    copy: 'All state transitions run through pure events and interceptors, giving you replayable, inspectable updates. Business logic stays pure; effects are explicit. Behavior stays auditable and testable at scale.',
  },
  {
    stamp: '100% ARTISANAL',
    title: 'Composable architecture',
    copy: 'Grow features by composing events, subscriptions, and effects. Patterns stay local and predictable, and scale gracefully as complexity rises.',
  },
  {
    stamp: 'NO AI REQUIRED',
    title: 'Reactive subscriptions',
    copy: 'Express derived data declaratively. React components re-render only when their data actually changes. Your fingers do the typing; the graph does the thinking.',
  },
]

const manual = [
  {
    title: 'Create a runtime',
    copy: 'One runtime owns its state, handlers, and reactive graph. Create one per app root, test, SSR request, or agent sandbox — there is no package-global store.',
  },
  {
    title: 'Register events',
    copy: 'Events are pure reducers that mutate an Immer draft and optionally return effects as data. They run through interceptors before the state is committed.',
  },
  {
    title: 'Register and use subscriptions',
    copy: 'Subscriptions describe the data graph. Components use the useSubscription hook to react to changes.',
  },
  {
    title: 'Dispatch and render',
    copy: 'Dispatch events from anywhere in your app. React Native and web consume the same state layer.',
  },
]

export function HumanMode() {
  return (
    <section className="human" id="humans">
      <div className="container human__inner">
        <Reveal className="human__masthead">
          <p className="human__dept">
            <span className="human__rule" aria-hidden="true" />
            The Artisanal Software Department
            <span className="human__rule" aria-hidden="true" />
          </p>
          <img
            className="human__crest"
            src={`${import.meta.env.BASE_URL}uklad_logo.png`}
            alt="Original Uklad logo"
          />
          <h2 className="human__title">
            Still typing code <em>by hand?</em>
            <br />
            Adorable. We built this for you first.
          </h2>
          <p className="human__sub">
            Before agents, there were humans — remarkable creatures with keyboards, strong opinions,
            and forty-seven browser tabs. The original Uklad pitch is preserved below, unretouched.
            It all still works. Splendidly.
          </p>
        </Reveal>

        <div className="human-grid">
          {classics.map(({ stamp, title, copy }, i) => (
            <Reveal key={title} delay={i * 100} className="human-card">
              <span className="human-card__stamp">{stamp}</span>
              <h3 className="human-card__title">{title}</h3>
              <p className="human-card__copy">{copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="crt">
          <p className="crt__ontv">
            <span className="crt__ontv-dot" aria-hidden="true" />
            As seen on television
          </p>
          <div className="crt__set">
            <div className="crt__screen-wrap">
              <div className="crt__screen">
                <iframe
                  src="https://www.youtube.com/embed/xwv5SwlF4Dg"
                  title="Building production-ready apps with AI confidently using the Uklad architecture"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="crt__scan" aria-hidden="true" />
                <div className="crt__glare" aria-hidden="true" />
              </div>
            </div>
            <div className="crt__panel">
              <span className="crt__brand">
                Uklad<span className="crt__brand-vision">VISION</span>
              </span>
              <span className="crt__badge">COLOR</span>
              <div className="crt__knobs">
                <span className="crt__knob" />
                <span className="crt__knob" />
              </div>
              <div className="crt__speaker" aria-hidden="true" />
              <span className="crt__led" aria-hidden="true" />
            </div>
          </div>
          <p className="crt__caption">
            Adjust the antenna, smack the side if it flickers: building production-ready apps
            with AI, as broadcast to your living room.
          </p>
        </Reveal>

        <Reveal className="human-manual">
          <h3 className="human-manual__title">The Owner&rsquo;s Manual</h3>
          <p className="human-manual__note">One loop, four steps, zero surprises. As enjoyed by humans since the re-frame days.</p>
          <ol className="human-manual__list">
            {manual.map(({ title, copy }) => (
              <li key={title}>
                <strong>{title}.</strong> {copy}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <ComparisonTable />
        </Reveal>

        <Reveal className="human-quote">
          <p className="human-quote__stars" aria-hidden="true">★★★★★</p>
          <blockquote>
            &ldquo;I read my own code from three months ago and understood it immediately.&rdquo;
          </blockquote>
          <cite>— a human developer, visibly moved</cite>
        </Reveal>

        <Reveal className="human__fineprint">
          <p>
            Fine print: everything that makes Uklad legible to agents — pure functions, explicit
            effects, one event log — is exactly what makes it kind to human brains. That was the
            point all along.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
