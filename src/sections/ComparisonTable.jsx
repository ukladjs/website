const rows = [
  {
    label: 'Type / Role',
    others: 'Libraries providing low-level primitives for state management — architecture must be assembled manually',
    reflex: 'Complete framework with opinionated patterns and conventions',
    why: 'Framework: predefined architecture eliminates decision fatigue, enforces consistency, and provides scalable, battle-tested patterns',
  },
  {
    label: 'Architecture Clarity',
    others: 'Redux: Complex action/reducer/middleware layers. Zustand: Simple but unstructured for large apps',
    reflex: 'Event-driven architecture with explicit separation of events, state updates, and effects',
    why: 'Unified mental model: a single event→effect→subscription pipeline simplifies reasoning and maintenance in large systems',
  },
  {
    label: 'State Derivation',
    others: 'Redux: Reselect for memoized selectors. Zustand: Manual selector functions',
    reflex: 'Reactive subscriptions with automatic dependency tracking',
    why: 'Declarative data flow: dependencies tracked automatically; no manual selector logic or stale closure issues common in hook-based stores',
  },
  {
    label: 'Side-effects Handling',
    others: 'Redux: Middleware (thunks/sagas) mixes effects with business logic. Zustand: Inline or custom middleware',
    reflex: 'Pure events return effects as declarative data structures',
    why: 'Pure business logic: events stay pure, effects are explicit and testable; tooling can visualize and validate effect flow',
  },
  {
    label: 'Reactive Updates',
    others: 'Redux: connect/selectors trigger re-renders. Zustand: Manual subscription control',
    reflex: 'Built-in reactive subscription system',
    why: 'Automatic granularity: the reactivity graph updates components only when their subscribed data changes — no manual optimization required',
  },
  {
    label: 'Debuggability',
    others: 'Redux: DevTools track actions/state diffs. Zustand: Limited devtools',
    reflex: 'Built-in event tracing, db snapshots, and live dependency visualization via Reflex DevTools',
    why: 'Full-system X-ray: every event, effect, and subscription exposed in real time — plus an MCP server so AI agents can debug alongside you',
  },
  {
    label: 'Testing',
    others: 'Redux: Reducers are testable, but async and effects complicate tests. Zustand: unit tests only',
    reflex: 'Pure events and declarative effects allow full replay and snapshot testing',
    why: 'Deterministic replay: event logs reproduce complete app state, simplifying regression and snapshot testing',
  },
  {
    label: 'Scalability',
    others: 'Redux: Scales with conventions and discipline. Zustand: Not structured for large teams',
    reflex: 'Composable interceptors and modular event/effect layers scale predictably',
    why: 'Team scaling: consistent patterns and guardrails reduce cognitive load and architectural drift in large teams',
  },
  {
    label: 'Immutability',
    others: 'Redux: Optional Immer or Immutable.js; mutable risk in plain JS. Zustand: Mutable by default',
    reflex: 'Immer ensures structural sharing and type-safe mutations',
    why: 'Type-safe immutability: compile-time safety with ergonomic mutation syntax and performance-efficient state updates',
  },
]

export function ComparisonTable() {
  return (
    <div className="human-compare" id="comparison">
      <h3 className="human-compare__title">A fair comparison with the other hand tools</h3>
      <p className="human-compare__note">
        Conducted honestly, the old-fashioned way: in a table.
      </p>
      <div className="human-compare__wrapper">
        <table className="human-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Redux / Zustand</th>
              <th scope="col">Reflex</th>
              <th scope="col">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, others, reflex, why }) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{others}</td>
                <td>{reflex}</td>
                <td>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
