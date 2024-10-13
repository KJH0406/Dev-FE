import "./App.css"
import NewTodo from "./components/NewTodo"
import Todos from "./components/Todos"
import Todo from "./models/todo"
import { useState } from "react"

function App() {
  // Todo 배열
  const [todos, setTodos] = useState<Todo[]>([]) // state의 초기값을 제너릭을 통해서 Todo 객체를 담을 배열임을 알림
  // Todo 추가 함수
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  // Todo 제거 함수
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  )
}

export default App
