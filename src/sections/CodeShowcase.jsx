import { useState } from 'react'
import { CodeBlock, CodeWindow } from '../components/CodeBlock.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'

const tabs = {
  catalog: {
    label: "Catalog",
    file: "app/uklad/catalog.ts",
    code: "// One place declaring every state root and handler id this app addresses.\n// Direct string literals, so a text search finds what the runtime finds.\n\nexport const stateKeys = {\n  todosById: 'todosById',\n  todosShowing: 'todosShowing',\n} as const\n\nexport const appIds = {\n  events: {\n    todosAdd: 'todos/add',\n    todosToggleDone: 'todos/toggle-done',\n    todosFetch: 'todos/fetch',\n    todosLoaded: 'todos/loaded',\n  },\n  effects: {\n    httpFetch: 'http/fetch',\n  },\n  coeffects: {\n    systemNow: 'system/now',\n  },\n  subscriptions: {\n    todosById: 'todos/by-id',\n    todosShowing: 'todos/showing',\n    todosVisible: 'todos/visible',\n  },\n} as const",
  },
  contracts: {
    label: "Contracts",
    file: "app/uklad/contracts.ts",
    code: "import type { UkladContracts } from '@ukladjs/core/vanilla'\n\nimport type { Todo, TodoId, TodosById, TodosShowing } from '../../features/todos/state'\nimport type { appIds, stateKeys } from './catalog'\n\n// The catalog says which names exist. This says what they mean.\nexport interface AppState {\n  [stateKeys.todosById]: TodosById\n  [stateKeys.todosShowing]: TodosShowing\n}\n\nexport interface AppContracts extends UkladContracts {\n  state: AppState\n\n  coeffects: {\n    [appIds.coeffects.systemNow]: { arg: void; value: number }\n  }\n\n  events: {\n    [appIds.events.todosAdd]: [title: string]\n    [appIds.events.todosToggleDone]: [id: TodoId]\n    [appIds.events.todosFetch]: []\n    [appIds.events.todosLoaded]: [todos: Todo[]]\n  }\n\n  subscriptions: {\n    [appIds.subscriptions.todosById]: { params: []; result: TodosById }\n    [appIds.subscriptions.todosShowing]: { params: []; result: TodosShowing }\n    [appIds.subscriptions.todosVisible]: { params: []; result: Todo[] }\n  }\n}",
  },
  events: {
    label: "Events",
    file: "features/todos/events.ts",
    code: "import type { UkladModule, UkladRegistrar } from '@ukladjs/core/vanilla'\n\nimport { appIds } from '../../app/uklad/catalog'\nimport type { AppContracts } from '../../app/uklad/contracts'\nimport type { Todo } from './state'\n\nexport const registerTodosEvents: UkladModule<UkladRegistrar<AppContracts>> = (registrar) => {\n  // Pure: mutate the Immer draft, never touch the environment.\n  // The clock arrives as a coeffect, so ids stay deterministic in tests.\n  registrar.regEvent(\n    appIds.events.todosAdd,\n    ({ draftState, coeffects: { now } }, title) => {\n      const todo: Todo = { id: now, title: title.trim(), done: false }\n      draftState.todosById.set(todo.id, todo)\n    },\n    { coeffects: { now: appIds.coeffects.systemNow } },\n  )\n\n  registrar.regEvent(appIds.events.todosToggleDone, ({ draftState }, id) => {\n    const todo = draftState.todosById.get(id)\n    if (todo) todo.done = !todo.done\n  })\n\n  // No I/O here. The handler returns an intent; the runtime executes it.\n  registrar.regEvent(appIds.events.todosFetch, () => [\n    [appIds.effects.httpFetch, { url: '/api/todos', onSuccess: [appIds.events.todosLoaded] }],\n  ])\n\n  registrar.regEvent(appIds.events.todosLoaded, ({ draftState }, todos) => {\n    draftState.todosById = new Map(todos.map((todo) => [todo.id, todo]))\n  })\n}",
  },
  effects: {
    label: "Effects",
    file: "platform/web/effects.ts",
    code: "import type { UkladModule, UkladRegistrar } from '@ukladjs/core/vanilla'\n\nimport { appIds } from '../../app/uklad/catalog'\nimport type { AppContracts } from '../../app/uklad/contracts'\n\n// The only place that touches the network. Swap this module for a native or\n// test one and every event handler stays byte-identical.\nexport const registerWebEffects: UkladModule<UkladRegistrar<AppContracts>> = (registrar) => {\n  registrar.regEffect(appIds.effects.httpFetch, async ({ url, onSuccess }, runtime) => {\n    const response = await fetch(url)\n    if (!response.ok) throw new Error(`HTTP ${response.status}`)\n    runtime.dispatch([...onSuccess, await response.json()])\n  })\n\n  registrar.regCoeffect(appIds.coeffects.systemNow, () => Date.now())\n}",
  },
  subscriptions: {
    label: "Subscriptions",
    file: "features/todos/subscriptions.ts",
    code: "import type { UkladModule, UkladRegistrar } from '@ukladjs/core/vanilla'\n\nimport { appIds, stateKeys } from '../../app/uklad/catalog'\nimport type { AppContracts } from '../../app/uklad/contracts'\n\nexport const registerTodosSubscriptions: UkladModule<UkladRegistrar<AppContracts>> = (\n  registrar,\n) => {\n  // regRootSub is the one place a subscription id meets a state key.\n  registrar.regRootSub(appIds.subscriptions.todosById, stateKeys.todosById)\n  registrar.regRootSub(appIds.subscriptions.todosShowing, stateKeys.todosShowing)\n\n  // Computed nodes depend on subscription ids only, never on state keys \u2014\n  // so the storage shape stays free to change behind them.\n  registrar.regSub(\n    appIds.subscriptions.todosVisible,\n    () => [[appIds.subscriptions.todosById], [appIds.subscriptions.todosShowing]],\n    ([todosById, showing]) => {\n      const todos = Array.from(todosById.values())\n      if (showing === 'active') return todos.filter((todo) => !todo.done)\n      if (showing === 'done') return todos.filter((todo) => todo.done)\n      return todos\n    },\n  )\n}",
  },
  view: {
    label: "View",
    file: "features/todos/ui/TaskList.tsx",
    code: "import { useRuntime, useSubscription } from '../../../app/uklad/bindings'\nimport { appIds } from '../../../app/uklad/catalog'\n\n// Subscribe to data, dispatch intent. That is the whole component contract \u2014\n// no store import, no selector wiring, no manual memoisation.\nexport function TaskList() {\n  const todos = useSubscription([appIds.subscriptions.todosVisible])\n  const { dispatch } = useRuntime()\n\n  return (\n    <ul className=\"todo-list\">\n      {todos.map((todo) => (\n        <li key={todo.id} className={todo.done ? 'completed' : undefined}>\n          <input\n            type=\"checkbox\"\n            checked={todo.done}\n            onChange={() => dispatch([appIds.events.todosToggleDone, todo.id])}\n          />\n          <label>{todo.title}</label>\n        </li>\n      ))}\n    </ul>\n  )\n}",
  },
}

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('catalog')

  return (
    <section className="section" id="code">
      <div className="container">
        <SectionHeader
          eyebrow="show me the code"
          title="Six building blocks. Zero magic to hallucinate."
          subtitle="A real TodoMVC with HTTP persistence and TypeScript types. Events are data, effects are data, subscriptions are a graph — explicit enough for readers made of neurons or weights."
        />

        <Reveal className="code-showcase">
          <div className="code-tabs" role="tablist" aria-label="TodoMVC building blocks">
            {Object.entries(tabs).map(([key, { label }]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                className={`code-tab ${activeTab === key ? 'code-tab--active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <CodeWindow title={tabs[activeTab].file}>
            <CodeBlock code={tabs[activeTab].code} />
          </CodeWindow>
        </Reveal>
      </div>
    </section>
  )
}
