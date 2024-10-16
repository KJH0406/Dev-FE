import { Suspense } from "react"

import Link from "next/link"

import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/get-meals"
import Loading from "./loading-meals"

import styles from "@/styles/meals/meals-main.module.css"

export const metadata = {
  title: "All Meals",
  description: "맛난 음식 잔뜩 보기",
}

const Meals = async () => {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

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
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </section>
    </>
  )
}

export default MealsPage
