import React from "react"
import Todo from "../models/todo"
import styles from "./TodoItem.module.css"

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  return (
    <li className={styles.item} key={props.item.id}>
      {props.item.text}
    </li>
  )
}

export default TodoItem
