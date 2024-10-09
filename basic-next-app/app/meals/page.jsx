import Link from "next/link"
import MealsGrid from "@/components/meals/meals-grid"
import styles from "@/styles/meals/meals-main.module.css"

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          맛있는 음식, 만들어짐{" "}
          <span className={styles.highlight}>만든 사람</span>
        </h1>
        <p>맛난거 선택하고 마음에 드는 레시피도 골라보세요!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">레시피 공유하기!</Link>
        </p>
      </header>
      <section className={styles.main}>
        <MealsGrid meals={[]} />
      </section>
    </>
  )
}

export default MealsPage
