import { useState, useEffect, useReducer } from "react"
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

// Reducer Type
const CREATE = "CREATE"
const UPDATE = "UPDATE"
const DELETE = "DELETE"
const INIT = "INIT"

// Reducer
function reducer(state, action) {
  // localStorege에 저장
  let nextState
  switch (action.type) {
    case INIT: {
      return action.data
    }
    case CREATE: {
      nextState = [action.data, ...state]
      break
    }

    case UPDATE: {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      )
      break
    }

    case DELETE: {
      nextState = state.filter((item) => String(item.id) !== String(action.id))
      break
    }
    default:
      return state
  }
  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState
}

// StateContext(상태의 변동성이 높은 것)
export const DiaryStateContext = createContext()

// DispatchContext(상태의 변동성이 높지 않은 것)
export const DiaryDispatchContext = createContext()

function App() {
  // 로딩 상태 확인
  const [isLoading, setIsLoading] = useState(true)
  // 일기 데이터
  const [data, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    const storedData = localStorage.getItem("diary")
    if (!storedData) {
      setIsLoading(false)
      return
    }
    const parsedData = JSON.parse(storedData)

    dispatch({
      type: INIT,
      data: parsedData,
    })
    setIsLoading(false)
  }, [])

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

  if (isLoading) {
    return <div>데이터 로딩중 입니다 ...</div>
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
