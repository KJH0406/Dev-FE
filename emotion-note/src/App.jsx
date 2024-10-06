import "./App.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"

function App() {
  const nav = useNavigate()
  const onClickButton = () => {
    nav("/new")
  }
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/new">New</Link>
      </div>
      <button onClick={onClickButton}>새로운 일기 생성</button>
      <Routes>
        <Route path="/" element={<Home />}>
          home
        </Route>
        <Route path="diary" element={<Diary />}>
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
