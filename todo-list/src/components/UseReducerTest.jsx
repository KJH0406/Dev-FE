import { useReducer } from "react"

// 액션 타입 상수
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

// reducer : 변환기(상태를 실제로 변환하는 역할)
function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case INCREASE:
      return state + action.data
    case DECREASE:
      return state - action.data
    default:
      return state
  }
}

const UseReducerTest = () => {
  // dispatch : 상태 변화가 있어야 한다는 사실을 알리는 함수
  const [state, dispatch] = useReducer(reducer, 0)

  // 상태 변화 함수 분리
  const increase = () => dispatch({ type: INCREASE, data: 1 })
  const decrease = () => dispatch({ type: DECREASE, data: 1 })

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default UseReducerTest
