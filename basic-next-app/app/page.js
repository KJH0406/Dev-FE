import Link from "next/link"
import styles from "@/styles/page.module.css"
import SlideItem from "@/components/slide/slide-item"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <SlideItem />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>요리 백과사전</h1>
            <p>전 세계의 음식을 맛보고 공유하세요.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">커뮤니티에 참여하기</Link>
            <Link href="/meals">음식 탐험하기</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>어떻게 작동하나요?</h2>
          <p>
            음식 백과사전은 음식 애호가들이 그들의 좋아하는 레시피를 전 세계와
            공유할 수 있는 플랫폼입니다. 새로운 요리를 발견하고, 다른 음식
            애호가들과 소통할 수 있는 장소입니다.
          </p>
          <p>
            음식 백과사전은 새로운 요리를 발견하고, 다른 음식 애호가들과 소통할
            수 있는 장소입니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>왜 음식 백과사전 인가요?</h2>
          <p>
            음식 백과사전은 음식 애호가들이 그들의 좋아하는 레시피를 전 세계와
            공유할 수 있는 플랫폼입니다. 새로운 요리를 발견하고, 다른 음식
            애호가들과 소통할 수 있는 장소입니다.
          </p>
          <p>
            음식 백과사전은 새로운 요리를 발견하고, 다른 음식 애호가들과 소통할
            수 있는 장소입니다.
          </p>
        </section>
      </main>
    </>
  )
}
