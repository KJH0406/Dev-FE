import { useState } from "react"
import { useNavigate } from "react-router-dom"

// components
import Button from "./Button"
import DiaryItem from "./DiaryItem"

// css
import "../styles/DiaryList.css"

const DiaryList = ({ data }) => {
  const nav = useNavigate()
  // 정렬 기준
  const [sortType, setSortType] = useState("latest")

  // 정렬 기준 변경
  const onChangeSortType = (e) => {
    setSortType(e.target.value)
  }

  // 정렬 살행
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate)
      } else {
        return Number(b.createdDate) - Number(a.createdDate)
      }
    })
  }

  // 일기 데이터(정렬 적용)
  const sortedData = getSortedData()

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav("/new")
          }}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default DiaryList
