import { getMeal } from "@/lib/get-meals"
import styles from "@/styles/meals/meal-detail-page.module.css"
import Image from "next/image"

const MealDetailPage = ({ params }) => {
  const meal = getMeal(params.slug)

  meal.instructions = meal.instructions.replace(/\n/g, "<br />")
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            제작자: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  )
}

export default MealDetailPage
