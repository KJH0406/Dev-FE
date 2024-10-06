import { useState, useContext } from "react"

// context
import { DiaryStateContext } from "../App"

// components
import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

// css
import "../styles/Home.css"

// 월별 일기 데이터 필터링
const getMonthlyData = (flagDate, data) => {
  const beginTime = new Date(
    flagDate.getFullYear(),
    flagDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()

  const endTime = new Date(
    flagDate.getFullYear(),
    flagDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime()

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  )
}

const Home = () => {
  // 일기 데이터
  const data = useContext(DiaryStateContext)

  // 기준 날짜
  const [flagDate, setFlagDate] = useState(new Date())

  // 일기 데이터(월별)
  const monthlyData = getMonthlyData(flagDate, data)

  // 월 이동 함수
  const onIncreaseMonth = () => {
    setFlagDate(new Date(flagDate.getFullYear(), flagDate.getMonth() + 1))
  }
  const onDncreaseMonth = () => {
    setFlagDate(new Date(flagDate.getFullYear(), flagDate.getMonth() - 1))
  }

  return (
    <div className="Home">
      <Header
        title={`${flagDate.getFullYear()}년 ${flagDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDncreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home
