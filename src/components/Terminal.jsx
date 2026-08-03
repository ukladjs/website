import { useEffect, useState } from 'react'

// One agent session, dramatized line by line. Grounded in the real workflow:
// grep the id index, write a pure handler, let tsc check payloads, then
// dispatch + verify through the DevTools MCP.
const SCRIPT = [
  { cls: 'user', delay: 500, text: '❯ agent "add archive-todo, verify it works"' },
  { cls: 'tool', delay: 900, text: 'grep -n "ARCHIVE" src/event-ids.ts' },
  { cls: 'dim', delay: 550, text: '  no matches — id is free, context stays tiny' },
  { cls: 'tool', delay: 800, text: 'edit src/event-ids.ts   + ARCHIVE_TODO' },
  { cls: 'tool', delay: 800, text: 'edit src/events.ts      + regEvent(ARCHIVE_TODO, …)  9 lines, pure' },
  { cls: 'tool', delay: 800, text: 'tsc --noEmit' },
  { cls: 'ok', delay: 600, text: '  ✓ payload matches the handler signature' },
  { cls: 'tool', delay: 850, text: 'mcp › dispatch_event ["todos/archive", 42]' },
  { cls: 'dim', delay: 700, text: '  ← { outcome: "succeeded", patches: 1, effects: [] }' },
  { cls: 'tool', delay: 800, text: 'mcp › get_app_state todos.42.archived' },
  { cls: 'dim', delay: 600, text: '  ← true' },
  { cls: 'ok', delay: 750, text: '✓ verified against the running app — no fear' },
]

export function Terminal() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(SCRIPT.length)
      return undefined
    }
    const timer = setTimeout(
      () => setCount((c) => (c < SCRIPT.length ? c + 1 : 0)),
      count < SCRIPT.length ? SCRIPT[count].delay : 7000
    )
    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="terminal" role="img" aria-label="An AI agent adds a feature, type-checks it, then dispatches an event through Reflex DevTools MCP and verifies the state change against the running app.">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
        <span className="terminal__title">agent — reflex session</span>
      </div>
      <div className="terminal__body">
        {SCRIPT.slice(0, count).map((line, i) => (
          <div key={i} className={`terminal__line terminal__line--${line.cls}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal__cursor" aria-hidden="true" />
      </div>
    </div>
  )
}
