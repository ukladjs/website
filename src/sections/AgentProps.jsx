import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import {
  DebugIcon,
  PuzzleIcon,
  ReplayIcon,
  SearchIcon,
  ShieldIcon,
  TerminalIcon,
} from '../components/icons.jsx'

const props = [
  {
    icon: <SearchIcon size={20} />,
    tag: 'retrieval',
    title: 'Indexed by design',
    copy: 'Event, sub, and effect IDs live in *-ids.ts files — a built-in index of everything your app can do. Agents find the exact handler with one exact-match grep instead of scanning the codebase.',
  },
  {
    icon: <PuzzleIcon size={20} />,
    tag: 'blast radius',
    title: 'Pure handlers, bounded review',
    copy: 'Every state change is a pure function of the db and a payload; side effects come out as data. Verifying a change means reading one function — not tracing a call graph across the app.',
  },
  {
    icon: <ShieldIcon size={20} />,
    tag: 'feedback',
    title: 'The compiler reviews first',
    copy: 'Opt-in typed payload maps check every dispatch against its handler signature. A wrong payload is a compile error — the cheapest verification signal an agent can get, long before runtime.',
  },
  {
    icon: <DebugIcon size={20} />,
    tag: 'observability',
    title: 'Failures leave a trace',
    copy: 'Handler and effect errors are captured in the event trace with phase, message, and stack. Nothing silently vanishes — every failure is queryable after the fact.',
  },
  {
    icon: <TerminalIcon size={20} />,
    tag: 'runtime access',
    title: 'A runtime you can interrogate',
    copy: 'Through DevTools MCP the agent queries app state, inspects traces, and dispatches real events from the IDE. Observe, act, verify — without switching to a browser tab.',
  },
  {
    icon: <ReplayIcon size={20} />,
    tag: 'determinism',
    title: 'Deterministic replay',
    copy: 'One semantic event log reproduces the entire app state. Debugging sessions and regression tests become replays, not archaeology.',
  },
]

export function AgentProps() {
  return (
    <section className="section" id="agents">
      <div className="container">
        <SectionHeader
          eyebrow="why agents ship faster here"
          title="An architecture your agent already understands."
          subtitle="Every design decision doubles as a context-efficiency win: less scanning, cheaper verification, tighter feedback loops. That's not a plugin — it's the architecture."
        />
        <div className="agent-grid">
          {props.map(({ icon, tag, title, copy }, i) => (
            <Reveal key={title} delay={(i % 3) * 90} className="agent-card">
              <div className="agent-card__top">
                <span className="agent-card__icon">{icon}</span>
                <span className="agent-card__tag">{tag}</span>
              </div>
              <h3 className="agent-card__title">{title}</h3>
              <p className="agent-card__copy">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
