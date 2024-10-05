import "../styles/Editor.css"
import useInput from "../hooks/useInput"
import { useRef } from "react"

const Editor = ({ onCreate }) => {
  const [content, handleContentChange, setContent] = useInput("")
  const inputRef = useRef("")

  const handleCreate = () => {
    if (content.trim() !== "") {
      onCreate(content)
      setContent("")
    } else {
      inputRef.current.focus()
    }
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      handleCreate()
    }
  }

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={handleContentChange}
        placeholder="새로운 Todo..."
      />
      <button onClick={handleCreate}>추가</button>
    </div>
  )
}

export default Editor
