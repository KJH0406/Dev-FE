import getEmotionImg from "../util/get-emotion-img"
import Button from "./Button"
import "../styles/DiaryItem.css"

const DiaryItem = ({ emotionId }) => {
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImg(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 내용</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  )
}

export default DiaryItem
