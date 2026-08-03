import './styles.css'

import { AgentLoop } from './sections/AgentLoop.jsx'
import { AgentProps } from './sections/AgentProps.jsx'
import { CallToAction } from './sections/CallToAction.jsx'
import { CodeShowcase } from './sections/CodeShowcase.jsx'
import { Footer } from './sections/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { HumanMode } from './sections/HumanMode.jsx'
import { Nav } from './sections/Nav.jsx'
import { QuickStart } from './sections/QuickStart.jsx'

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <AgentProps />
        <AgentLoop />
        <CodeShowcase />
        <HumanMode />
        <QuickStart />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
