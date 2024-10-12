import styles from "@/styles/share/share-meal-page.module.css"
import ImagePicker from "@/components/meals/image-picker"
import { shareMeal } from "@/lib/action"

const ShareMealPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          당신의 <span className={styles.highlight}>좋아하는 음식</span>을
          공유하세요
        </h1>
        <p>혹은 공유할만한 다른 음식을 알려주세요!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">간단한 설명</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">조리 방법</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Pick image" name="image" />
          <p className={styles.actions}>
            <button type="submit">음식 공유하기</button>
          </p>
        </form>
      </main>
    </>
  )
}

export default ShareMealPage
