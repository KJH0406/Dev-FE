import sql from "better-sqlite3"

// 데이터베이스 연결 설정
const db = sql("meals.db")

// 함수 앞에 async 키워드 추가
const getMeals = async () => {
  // 모든 데이터 조회
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // throw new Error("에러가 발생했습니다.") // 에러 테스트용
  return db.prepare("SELECT * FROM meals").all()
}

export default getMeals
