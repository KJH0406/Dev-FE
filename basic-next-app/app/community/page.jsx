import Image from "next/image"

import mealIcon from "@/assets/icons/meal.png"
import communityIcon from "@/assets/icons/community.png"
import eventsIcon from "@/assets/icons/events.png"
import styles from "@/styles/community/community.module.css"

const CommunityPage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          공통된 열정: <span className={styles.highlight}>음식</span>
        </h1>
        <p>커뮤니티에 가입하고 당신이 가장 좋아하는 요리법을 공유하세요!</p>
      </div>
      <main className={styles.main}>
        <h2>커뮤니티 혜택</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon} alt="m1" />
            <p>레시피를 공유하고 발견하세요</p>
          </li>
          <li>
            <Image src={communityIcon} alt="m2" />
            <p>새로운 친구와 같은 생각을 가진 사람들을 만나세요</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="m3" />
            <p>이벤트에 참여하세요</p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default CommunityPage
