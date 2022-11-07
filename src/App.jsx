import { useState } from 'react'
import './App.css'
import Schedule from './components/schedule/Schedule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Schedule/>
    </div>
  )
}

export default App
