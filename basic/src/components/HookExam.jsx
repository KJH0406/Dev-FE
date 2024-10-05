import useInput from "../hooks/useInput"

// hook tip
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 불가능
// 3. 커스텀 훅 생성 가능(접두사로 use사용)

const HookExam = () => {
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  )
}

export default HookExam
