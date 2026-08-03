import { CodeBlock } from '../components/CodeBlock.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { PersonIcon, RobotIcon } from '../components/icons.jsx'

const agentSteps = [
  {
    title: 'Install the agent toolkit',
    copy: 'One plugin, installed once, works across every repo. It gives Claude Code and Codex the whole Uklad workflow: skills, MCP config, and setup instructions.',
    lang: 'text',
    code: 'Claude Code:\n/plugin marketplace add ukladjs/agent-toolkit\n/plugin install uklad-agent-toolkit@ukladjs\n\nCodex:\ncodex plugin marketplace add ukladjs/agent-toolkit\nthen /plugins → install "Uklad Agent Toolkit"',
  },
  {
    title: 'Say what you want',
    copy: 'That\'s the whole setup. The agent does the rest itself — installs Uklad + DevTools, wires tracing, starts the MCP loop, and verifies its own work with dispatch_event.',
    lang: 'markdown',
    code: '> Create a new beautiful app with Uklad.\n\n> Migrate this app\'s state management to Uklad.\n\n> Add notifications and verify they work.',
  },
]
const humanSteps = [
  {
    title: 'Install',
    lang: 'bash',
    code: 'npm install @ukladjs/core',
  },
  {
    title: 'Create a runtime',
    copy: 'One runtime owns its state, handlers, and reactive graph. A module groups registrations so they can be disposed together.',
    lang: 'typescript',
    code: "import { createUkladRuntime } from '@ukladjs/core/vanilla'\n\nconst runtime = createUkladRuntime({\n  initialState: { counter: 0 },\n  runtimeId: 'counter-app',\n  name: 'Counter app',\n})\n\nruntime.registerModule((scope) => {\n  scope.regEvent('counter/increment', ({ draftState }) => {\n    draftState.counter += 1\n  })\n  scope.regRootSub('counter/value', 'counter')\n})",
  },
  {
    title: 'Use it in a component',
    copy: 'Subscribe to data, dispatch intent. Hooks read the runtime from the provider — there is no package-global store.',
    lang: 'typescript',
    code: "import { UkladProvider, useSubscription } from '@ukladjs/core/react'\n\nfunction Counter() {\n  const count = useSubscription(['counter/value'])\n  return (\n    <button onClick={() => runtime.dispatch(['counter/increment'])}>\n      Count: {count}\n    </button>\n  )\n}\n\nexport function App() {\n  return (\n    <UkladProvider runtime={runtime}>\n      <Counter />\n    </UkladProvider>\n  )\n}",
  },
  {
    title: 'Add devtools when curious',
    copy: 'Event history, live state, and the subscription graph — pleasant for humans, essential for agents.',
    lang: 'typescript',
    code: "// npm install -D @ukladjs/devtools, then run: npx uklad-devtools\nimport { enableDevtools } from '@ukladjs/devtools'\nimport { createUkladInspector } from '@ukladjs/core/devtools'\n\nif (import.meta.env.DEV) {\n  enableDevtools(createUkladInspector(runtime))\n}",
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
