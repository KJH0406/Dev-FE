import { useRef } from "react"
import { useState, useEffect } from "react"
import "./App.css"
import Controller from "./components/Controller"
import Even from "./components/Even"
import Viewer from "./components/Viewer"

function App() {
  const [count, setCount] = useState(0)

  const isMount = useRef(false)

  const onCountChange = (value) => {
    setCount(count + value)
  }

  // useEffect로 라이프 사이클 제어

  // 1. Mount(탄생)
  useEffect(() => {
    console.log("mount")
  }, []) // 빈 배열 전달

  // 2. Update(리렌더링, 변화)
  useEffect(() => {
    // mount 이후 업데이트(리렌더링) 발생할 때 업데이트 표시
    if (!isMount.current) {
      isMount.current = true
      return
    }
    console.log("update")
  })

  // 3. unMount(죽음)
  // Even 참고
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onCountChange={onCountChange} />
      </section>
    </div>
  )
}

export default App
