import { Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"

// components
import Header from "./components/Header"
import Button from "./components/Button"

// css
import "./App.css"

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <Button
        text={123}
        onClick={() => {
          console.log("hi")
        }}
      />
      <Button
        text={123}
        type={"POSITIVE"}
        onClick={() => {
          console.log("hi")
        }}
      />
      <Button
        text={123}
        type={"NAGATIVE"}
        onClick={() => {
          console.log("hi")
        }}
      />
      <Routes>
        <Route path="/" element={<Home />}>
          home
        </Route>
        {/* URL Parameter(:id)활용하여 동적 라우팅 */}
        <Route path="diary/:id" element={<Diary />}>
          diary
        </Route>
        <Route path="new" element={<New />}>
          new
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
