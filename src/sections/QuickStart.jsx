import { CodeBlock } from '../components/CodeBlock.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { PersonIcon, RobotIcon } from '../components/icons.jsx'

const agentSteps = [
  {
    title: 'Install the agent toolkit',
    copy: 'One plugin, installed once, works across every repo. It gives Claude Code and Codex the whole Reflex workflow: skills, MCP config, and setup instructions.',
    lang: 'text',
    code: 'Claude Code:\n/plugin marketplace add flexsurfer/reflex-agent-toolkit\n/plugin install reflex-agent-toolkit@reflex-agent-toolkit\n\nCodex:\ncodex plugin marketplace add flexsurfer/reflex-agent-toolkit\nthen /plugins → install "Reflex Agent Toolkit"',
  },
  {
    title: 'Say what you want',
    copy: 'That\'s the whole setup. The agent does the rest itself — installs Reflex + DevTools, wires tracing, starts the MCP loop, and verifies its own work with dispatch_event.',
    lang: 'markdown',
    code: '> Create a new beautiful app with Reflex.\n\n> Migrate this app\'s state management to Reflex.\n\n> Add notifications and verify they work.',
  },
]
const humanSteps = [
  {
    title: 'Install',
    lang: 'bash',
    code: 'npm install @flexsurfer/reflex',
  },
  {
    title: 'Initialize your app',
    copy: 'Bootstrap the app database, register an event, create a subscription.',
    lang: 'typescript',
    code: "import { initAppDb, regEvent, regSub } from '@flexsurfer/reflex'\n\ninitAppDb({ counter: 0 })\nregEvent('increment', ({ draftDb }) => {\n  draftDb.counter += 1\n})\nregSub('counter')",
  },
  {
    title: 'Use it in a component',
    copy: 'Subscribe to data, dispatch intent. That is the whole component contract.',
    lang: 'typescript',
    code: "import { useSubscription, dispatch } from '@flexsurfer/reflex'\n\nfunction Counter() {\n  const count = useSubscription(['counter'])\n  return (\n    <button onClick={() => dispatch(['increment'])}>\n      Count: {count}\n    </button>\n  )\n}",
  },
  {
    title: 'Add devtools when curious',
    copy: 'Time travel, event history, and the live subscription graph — pleasant for humans, essential for agents.',
    lang: 'bash',
    code: 'npx reflex-devtools',
  },
]

function Path({ icon, name, tag, steps, variant, delay }) {
  return (
    <Reveal delay={delay} className={`path path--${variant}`}>
      <header className="path__header">
        <span className="path__icon">{icon}</span>
        <div>
          <h3 className="path__name">{name}</h3>
          <p className="path__tag">{tag}</p>
        </div>
      </header>
      <ol className="path__steps">
        {steps.map(({ title, copy, code, lang }, i) => (
          <li key={title} className="path__step">
            <div className="path__step-head">
              <span className="path__step-num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{title}</h4>
            </div>
            {copy ? <p className="path__step-copy">{copy}</p> : null}
            <div className="path__code">
              <CodeBlock code={code} language={lang} fontSize="0.8rem" />
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

export function QuickStart() {
  return (
    <section className="section" id="quickstart">
      <div className="container">
        <SectionHeader
          eyebrow="get started"
          title="Pick your player."
          subtitle="Same architecture either way — one of you just types faster. The agent path is two steps and a sentence; the human path is a pleasant five minutes."
        />
        <div className="path-grid">
          <Path
            icon={<RobotIcon size={22} />}
            name="The agent path"
            tag="recommended by robots"
            steps={agentSteps}
            variant="agent"
            delay={0}
          />
          <Path
            icon={<PersonIcon size={22} />}
            name="The human path"
            tag="certified nostalgic"
            steps={humanSteps}
            variant="human"
            delay={120}
          />
        </div>
      </div>
    </section>
  )
}
