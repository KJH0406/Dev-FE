// components
import Button from "./Button"
import EmotionItem from "./EmotionItem"

// css
import "../styles/Editor.css"
import { useState } from "react"

// 감정 목록
const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "완전 나쁨",
  },
]

// 날짜 형식 변환(YYYY-MM-DD)
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear()
  let month = targetDate.getMonth() + 1
  let date = targetDate.getDate()

  if (month < 10) {
    month = `0${month}`
  }
  if (date < 10) {
    date = `0${date}`
  }

  return `${year}-${month}-${date}`
}

const Editor = () => {
  // 현재 선택된 오늘의 감정
  const selectedEmotionId = 1

  // 사용자 입력 데이터
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  })

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" value={getStringedDate(input.createdDate)} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => {
            return (
              <EmotionItem
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === selectedEmotionId}
              />
            )
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <div className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </div>
    </div>
  )
}

export default Editor
