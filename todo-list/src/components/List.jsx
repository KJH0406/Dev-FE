import { useContext } from "react"
import { useState } from "react"
import { TodoContext } from "../App"
import "../styles/List.css"
import TodoItem from "./TodoItem"

const List = () => {
  const { todos } = useContext(TodoContext)

  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === "") {
      return todos
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilteredData()

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    </div>
  )
}

export default List
