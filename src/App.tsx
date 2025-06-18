import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans text-gray-800 scroll-smooth">
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="certificates"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
      <h1>Proyec Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Full Stack Develop
        </p>
      </div>
      <p>
        _makeding think in internet
      </p>
    </>
  )
}

export default App
