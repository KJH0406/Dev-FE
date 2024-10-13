import React, { useRef } from "react"

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // 입력 값 가져오기
  // input에 ref를 하면 해당 값을 가져오는데 타입을 제네릭으로 설정(HTMLInputElement)하고, 시작 값이 무엇이 들어올지 모르기 때문에 null로 설정 후 향후 입력되는 값으로 변경
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  // form 제출 함수
  const submithandler = (event: React.FormEvent) => {
    // 새로 고침 방지
    event.preventDefault()

    // 현재 input 입력 값 가져오기
    const enteredText = todoTextInputRef.current!.value

    // 유효성 검사
    if (enteredText.trim().length === 0) {
      // 유효성 검사 에러 처리
      // throw an error
      return
    }

    // 부모 함수에서 이벤트 발생 처리(제출 버튼)
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={submithandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
