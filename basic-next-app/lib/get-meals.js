import sql from "better-sqlite3"

// 데이터베이스 연결 설정
const db = sql("meals.db")

// 모든 데이터 조회 (비동기 함수)
const getMeals = async () => {
  // 비동기 대기 (2초)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // 데이터베이스에서 모든 식사 데이터 조회
  return db.prepare("SELECT * FROM meals").all()
}

// 특정 식사 데이터 조회 (동기 함수)
const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

// 두 함수 모두 내보내기
export { getMeals, getMeal }
