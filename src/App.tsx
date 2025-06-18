import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
