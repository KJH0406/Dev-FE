import getEmotionImg from "../util/get-emotion-img"

// css
import "../styles/EmotionItem.css"

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImg(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem
