import { useState, useEffect, useContext } from "react"
import { replace, useNavigate, useParams } from "react-router-dom"

// context
import { DiaryDispatchContext, DiaryStateContext } from "../App"

// componets
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"

const Edit = () => {
  const params = useParams()
  const nav = useNavigate()

  // 일기 초기 데이터 및 변경 함수
  const data = useContext(DiaryStateContext)
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)

  const [currentDiaryItem, setCurrentDiaryItem] = useState()

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    )
    if (!currentDiaryItem) {
      const alertMessage = "존재하지 않는 페이지입니다."
      window.alert(alertMessage)
      nav("/", { replace: true })
    }

    setCurrentDiaryItem(currentDiaryItem)
  }, [params.id, data])

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
