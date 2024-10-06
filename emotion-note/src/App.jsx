import "./App.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"
import getEmotionImg from "./util/get-emotion-img"

function App() {
  const nav = useNavigate()
  const onClickButton = () => {
    nav("/new")
  }
  return (
    <>
      <div>
        <img src={getEmotionImg(1)} />
        <img src={getEmotionImg(2)} />
        <img src={getEmotionImg(3)} />
        <img src={getEmotionImg(4)} />
        <img src={getEmotionImg(5)} />
      </div>
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
