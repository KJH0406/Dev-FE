import { useState } from "react"
import Editor from "./components/Editor"
import Header from "./components/Header"
import List from "./components/List"
import "./App.css"
import { v4 as uuidv4 } from "uuid"
import { useReducer } from "react"
import { createContext } from "react"

// 더미 데이터
const dummyData = [
  {
    id: 0,
    isDone: false,
    content: "노래하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
]

const CREATE = "CREATE"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return [action.data, ...state]
    case UPDATE:
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      )
    case DELETE:
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state
  }
}

export const TodoContext = createContext()

function App() {
  // todo 배열
  const [todos, dispatch] = useReducer(reducer, dummyData)

  // todo 생성 함수
  const onCreate = (content) => {
    dispatch({
      type: CREATE,
      data: {
        id: uuidv4(),
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }

  // todo 업데이트 함수(checkbox)
  const onUpdate = (targetId) => {
    dispatch({
      type: UPDATE,
      targetId: targetId,
    })
  }

  // todo 삭제 함수
  const onDelete = (targetId) => {
    dispatch({
      type: DELETE,
      targetId: targetId,
    })
  }

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onDelete, onUpdate }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App
