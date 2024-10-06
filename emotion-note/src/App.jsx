import { Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

// css
import "./App.css"
import { useReducer } from "react"

const dummyData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
]

function reducer(state, action) {
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* URL Parameter(:id)활용하여 동적 라우팅 */}
        <Route path="diary/:id" element={<Diary />} />
        <Route path="new" element={<New />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
