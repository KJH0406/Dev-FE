import { useState, useEffect } from "react"
import "./App.css"
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`count : ${count}`)
  }, [count])

  const onCountChange = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onCountChange={onCountChange} />
      </section>
    </div>
  )
}

export default App
