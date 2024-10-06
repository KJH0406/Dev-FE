import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

// pages
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

// css
import "./App.css"

// 임시 데이터
const dummyData = [
  {
    id: 1,
    createdDate: new Date("2024-10-06").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-10-05").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-09-29").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
]

// Reducer Type
const CREATE = "CREATE"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

// Reducer
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

// StateContext(상태의 변동성이 높은 것)
export const DiaryStateContext = createContext()

// DispatchContext(상태의 변동성이 높지 않은 것)
export const DiaryDispatchContext = createContext()

function App() {
  // 일기 데이터
  const [data, dispatch] = useReducer(reducer, dummyData)

  // 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: CREATE,
      data: {
        id: uuidv4(),
        createdDate,
        emotionId,
        content,
      },
    })
  }

  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: UPDATE,
      data: {
        id,
        createdDate,
        emotionId,
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
