import { useState } from "react"
import Editor from "./components/Editor"
import Header from "./components/Header"
import List from "./components/List"
import UseReducerTest from "./components/UseReducerTest"
import "./App.css"
import { v4 as uuidv4 } from "uuid"

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
function App() {
  // todo 배열
  const [todos, setTodos] = useState(dummyData)

  // todo 생성 함수
  const onCreate = (content) => {
    const newTodo = {
      id: uuidv4(),
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  // todo 업데이트 함수(checkbox)
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          }
        }
        return todo
      })
    )
  }

  // todo 삭제 함수
  const onDelete = (targetId) => {
    const filtered = todos.filter((todo) => todo.id !== targetId)

    setTodos(filtered)
  }

  return (
    <div className="App">
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
      <UseReducerTest />
    </div>
  )
}

export default App
