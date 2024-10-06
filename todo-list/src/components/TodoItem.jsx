import { useContext } from "react"
import { TodoContext } from "../App"
import "../styles/TodoItem.css"

const TodoItem = ({ todo }) => {
  const { onUpdate, onDelete } = useContext(TodoContext)

  const onChangeCheckbox = () => {
    onUpdate(todo.id)
  }

  const onClickDelete = () => {
    onDelete(todo.id)
  }
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        checked={todo.isDone}
        type="checkbox"
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}

export default TodoItem
