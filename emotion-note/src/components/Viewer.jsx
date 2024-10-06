// util
import getEmotionImg from "../util/get-emotion-img"
import { emotionList } from "../util/constants"

// css
import "../styles/Viewer.css"

const Viewer = () => {
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div>
          <img src={getEmotionImg(1)} />
        </div>
      </section>
      <section className="content_section"></section>
    </div>
  )
}

export default Viewer
