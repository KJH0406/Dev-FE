import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

// components
import Button from "./Button"
import EmotionItem from "./EmotionItem"

// css
import "../styles/Editor.css"
import { useEffect } from "react"

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

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate()

  // 초기 데이터
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      })
    }
  }, [initData])

  // 사용자 입력 데이터
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: null,
    content: "",
  })

  // 입력 값 저장
  const onChangeInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === "createdDate") {
      value = new Date(value)
    }

    setInput({
      ...input,
      [name]: value,
    })
  }

  const emotionListRef = useRef(null)

  // 완료 버튼 (작성 완료 / 수정 완료)
  const onClickSubmitButton = () => {
    // 감정 선택 여부 확인
    if (input.emotionId === null) {
      const alertMessage = "오늘의 감정을 선택해주세요!"
      window.alert(alertMessage)
      return
    }
    onSubmit(input)
  }

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          type="date"
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper" ref={emotionListRef}>
          {emotionList.map((emotion) => {
            return (
              <EmotionItem
                onClick={() => {
                  onChangeInput({
                    target: {
                      name: "emotionId",
                      value: emotion.emotionId,
                    },
                  })
                }}
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === input.emotionId}
              />
            )
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <div className="button_section">
        <Button
          onClick={() => {
            nav(-1)
          }}
          text={"취소하기"}
        />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </div>
    </div>
  )
}

export default Editor
