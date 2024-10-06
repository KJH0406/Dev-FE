import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DiaryStateContext } from "../App"

// 현재 일기 데이터 불러오기
const useDiary = (id) => {
  const nav = useNavigate()

  const data = useContext(DiaryStateContext)

  const [currentDiaryItem, setCurrentDiaryItem] = useState()

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id))
    if (!currentDiaryItem) {
      const alertMessage = "존재하지 않는 페이지입니다."
      window.alert(alertMessage)
      nav("/", { replace: true })
    }

    setCurrentDiaryItem(currentDiaryItem)
  }, [id, data])
  return currentDiaryItem
}

export default useDiary
