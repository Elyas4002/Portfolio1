import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Skills, Journey } from './components/Sections'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero /><About /><Skills /><Projects /><Journey /><Contact />
      </main>
    </>
  )
}
