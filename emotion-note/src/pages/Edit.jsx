import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

// context
import { DiaryDispatchContext } from "../App"

// componets
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import useDiary from "../hooks/useDiary"

const Edit = () => {
  const params = useParams()
  const nav = useNavigate()
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)

  const currentDiaryItem = useDiary(params.id)

  // 삭제 확인 및 처리
  const onClickDelete = () => {
    const confirmMessage = "일기를 정말 삭제할까요?"
    if (window.confirm(confirmMessage)) {
      onDelete(params.id)
      nav("/", { replace: true })
    }
  }

  // 수정 처리
  const onSubmit = (input) => {
    onUpdate(
      params.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    )
    nav("/", { replace: true })
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1)
            }}
            text={"뒤로 가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NAGATIVE"} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  )
}

export default Edit
