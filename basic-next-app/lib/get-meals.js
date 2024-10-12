import fs from "node:fs"

import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"

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

const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split(".").pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const butfferedImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(butfferedImage), (error) => {
    if (error) {
      throw new Error("이미지 저장에 실패했습니다.")
    }
  })

  meal.image = `/images/${fileName}`

  return db
    .prepare(
      `
  INSERT INTO meals
  (slug, title, image, summary, instructions, creator, creator_email)
  VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  
  `
    )
    .run(meal)
}

// 함수 내보내기
export { getMeals, getMeal, saveMeal }
