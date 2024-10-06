import { useNavigate, useParams } from "react-router-dom"

// components
import Header from "../components/Header"
import Button from "../components/Button"
import Viewer from "../components/Viewer"

// custom hooks
import useDiary from "../hooks/useDiary"
import getStringedDate from "../util/get-stringed-date"
import usePageTitle from "../hooks/usePageTitle"

const Diary = () => {
  usePageTitle("일기 펼쳐보기")
  const params = useParams()
  const nav = useNavigate()

  // 현재 일기 데이터 호출
  const currentDiaryItem = useDiary(params.id)

  if (!currentDiaryItem) {
    return <div>일기 불러오는 중...</div>
  }

  // 일기 데이터 구조 분해
  const { createdDate, emotionId, content } = currentDiaryItem
  const title = getStringedDate(new Date(createdDate))
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1)
            }}
            text={"뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`)
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary
