import { Routes, Route } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

// pages
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

// css
import "./App.css"
import { useReducer } from "react"
import { createContext } from "react"

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

const CREATE = "CREATE"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

function reducer(state, action) {
  switch (action.type) {
    case CREATE:
      return [action.data, ...state]
    case UPDATE:
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      )
    case DELETE:
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return state
  }
}

const DiaryStateContext = createContext()
const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData)

  // 일기 추가
  const onCreate = (createdDate, emtionId, content) => {
    dispatch({
      type: CREATE,
      data: {
        id: uuidv4(),
        createdDate,
        emtionId,
        content,
      },
    })
  }

  // 일기 수정
  const onUpdate = (id, createdDate, emtionId, content) => {
    dispatch({
      type: UPDATE,
      data: {
        id,
        createdDate,
        emtionId,
        content,
      },
    })
  }

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: DELETE,
      id,
    })
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* URL Parameter(:id)활용하여 동적 라우팅 */}
            <Route path="diary/:id" element={<Diary />} />
            <Route path="new" element={<New />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
