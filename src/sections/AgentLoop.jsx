import { CodeBlock, CodeWindow } from '../components/CodeBlock.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'

const appLoop = ['dispatch', 'interceptors', 'pure handler', 'new db', 'subscriptions', 'render']

const agentLoop = [
  { step: 'observe', detail: 'get_app_state · get_traces' },
  { step: 'act', detail: 'dispatch_event' },
  { step: 'verify', detail: 'outcome + state patches' },
]

const outcomeSnippet = `// agent, via DevTools MCP:
dispatch_event(["todos/toggle", 42])

// ← the runtime answers, same round trip:
{
  "outcome": "succeeded",
  "duration": 1.8,
  "patches": [
    { "op": "replace",
      "path": ["todos", 42, "done"],
      "value": true }
  ],
  "effects": []
}`

export function AgentLoop() {
  return (
    <section className="section" id="loop">
      <div className="container">
        <SectionHeader
          eyebrow="the loop"
          title="Two loops. One architecture."
          subtitle="Your app runs a unidirectional event loop. Your agent runs an observe–act–verify loop. Reflex DevTools MCP is where they meet: dispatch an event, get the outcome and the exact state diff back — no guessing, no screenshot folklore."
        />

        <div className="loop-panel">
          <Reveal className="loop-track">
            <span className="loop-track__label">your app</span>
            <div className="loop-track__chips">
              {appLoop.map((chip) => (
                <span key={chip} className="loop-chip">{chip}</span>
              ))}
              <span className="loop-chip loop-chip--return" aria-hidden="true">↺</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="loop-meet">
            <span className="loop-meet__line" aria-hidden="true" />
            <span className="loop-meet__badge">reflex devtools mcp</span>
            <span className="loop-meet__line" aria-hidden="true" />
          </Reveal>

          <Reveal delay={200} className="loop-track">
            <span className="loop-track__label">your agent</span>
            <div className="loop-track__chips">
              {agentLoop.map(({ step, detail }) => (
                <span key={step} className="loop-chip loop-chip--agent">
                  <strong>{step}</strong>
                  <small>{detail}</small>
                </span>
              ))}
              <span className="loop-chip loop-chip--return" aria-hidden="true">↺</span>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <CodeWindow title="one round trip, receipts included">
              <CodeBlock code={outcomeSnippet} language="json" />
            </CodeWindow>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
