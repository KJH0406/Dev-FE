import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import styles from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default Todos
