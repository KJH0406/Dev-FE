import { useNavigate } from "react-router-dom"

// components
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"

// css
import "../styles/New.css"

const New = () => {
  const nav = useNavigate()

  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1)
            }}
            text={"< 뒤로 가기"}
          />
        }
      />
      <Editor />
    </div>
  )
}

export default New
