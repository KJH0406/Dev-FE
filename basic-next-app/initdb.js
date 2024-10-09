const sql = require("better-sqlite3")
const db = sql("meals.db")

const dummyMeals = [
  {
    title: "육즙 가득 치즈 버거",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "부드러운 번에 담긴 육즙이 가득한 소고기 패티와 녹은 치즈가 어우러진 군침 도는 버거.",
    instructions: `
      1. 패티 준비:
         200g의 간 소고기에 소금과 후추를 섞고 패티 모양으로 만듭니다.

      2. 패티 요리:
         팬에 약간의 기름을 두르고 패티를 넣고 각 면을 2-3분씩 구워 갈색이 될 때까지 익힙니다.

      3. 버거 조립:
         버거 번의 반쪽을 토스트하고 상추와 토마토를 하단에 올립니다. 익힌 패티를 올리고 치즈 한 장을 얹습니다.

      4. 서빙:
         상단 번으로 조립을 마무리하고 따뜻하게 서빙합니다.
    `,
    creator: "최현석",
    creator_email: "최현석@example.com",
  },
  {
    title: "매운 카레",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "이국적인 향신료와 크리미한 코코넛 밀크가 어우러진 진하고 매운 카레.",
    instructions: `
      1. 채소 손질:
         좋아하는 채소를 한 입 크기로 자릅니다.

      2. 채소 볶기:
         팬에 기름을 두르고 채소가 부드러워질 때까지 볶습니다.

      3. 카레 페이스트 추가:
         2큰술의 카레 페이스트를 넣고 1분간 더 볶습니다.

      4. 코코넛 밀크와 함께 끓이기:
         500ml의 코코넛 밀크를 부어 끓입니다. 약 15분간 조리합니다.

      5. 서빙:
         밥이나 빵과 함께 이 크리미한 카레를 즐기세요.
    `,
    creator: "요리하는 돌아이",
    creator_email: "요리하는 돌아이@example.com",
  },
  {
    title: "수제 만두",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "부드러운 만두피에 고기와 채소로 채운 속이 가득한 완벽하게 찐 만두.",
    instructions: `
      1. 만두소 준비:
         다진 고기, 채 썬 채소, 향신료를 섞습니다.

      2. 만두 속 채우기:
         만두피 중앙에 만두소를 한 스푼씩 올리고 가장자리를 물로 적신 후 접어 봉합니다.

      3. 만두 찌기:
         만두를 찜기에 배열하고 약 10분간 찝니다.

      4. 서빙:
         따뜻하게 서빙하고 좋아하는 소스와 함께 즐기세요.
    `,
    creator: "정지선",
    creator_email: "정지선@example.com",
  },
  {
    title: "클래식 맥앤치즈",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "크리미하고 치즈 맛이 풍부한 마카로니, 언제나 인기 있는 클래식한 요리.",
    instructions: `
      1. 마카로니 요리:
         패키지 지시에 따라 마카로니를 알단테 상태로 끓입니다.

      2. 치즈 소스 준비:
         냄비에 버터를 녹이고 밀가루를 넣고 저어가며 우유를 점차적으로 넣어 걸쭉해질 때까지 끓입니다. 치즈를 넣고 녹을 때까지 저어줍니다.

      3. 혼합:
         치즈 소스를 물기를 뺀 마카로니에 섞습니다.

      4. 굽기:
         베이킹 접시에 옮기고 빵가루를 얹은 후 황금빛이 될 때까지 굽습니다.

      5. 서빙:
         뜨겁게 서빙하고 원한다면 파슬리로 장식합니다.
    `,
    creator: "에드워드 리",
    creator_email: "에드워드 리@example.com",
  },
  {
    title: "정통 피자",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary:
      "손으로 직접 만든 도우에 상큼한 토마토 소스, 신선한 토핑, 녹은 치즈가 어우러진 피자.",
    instructions: `
      1. 도우 준비:
         피자 도우를 반죽하고 부풀어 오를 때까지 기다립니다.

      2. 토핑 추가:
         도우를 밀고 토마토 소스를 바르고 좋아하는 토핑과 치즈를 추가합니다.

      3. 피자 굽기:
         예열된 오븐에서 220°C로 약 15-20분간 굽습니다.

      4. 서빙:
         따뜻하게 조각을 잘라 바질 잎을 뿌려 즐깁니다.
    `,
    creator: "나폴리 맛피아",
    creator_email: "나폴리 맛피아@example.com",
  },
  {
    title: "비엔나 슈니첼",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "바삭하고 황금빛의 빵가루를 입힌 송아지 커틀릿, 오스트리아의 고전 요리.",
    instructions: `
      1. 송아지 고기 준비:
         송아지 커틀릿을 고르게 두드려 평평하게 만듭니다.

      2. 송아지 고기 빵가루 입히기:
         각 커틀릿을 밀가루, 계란물, 빵가루에 순서대로 묻힙니다.

      3. 슈니첼 튀기기:
         팬에 기름을 두르고 각 슈니첼을 양면이 황금색이 될 때까지 튀깁니다.

      4. 서빙:
         레몬 조각과 감자 샐러드나 채소를 곁들여 따뜻하게 서빙합니다.
    `,
    creator: "트리플 스타",
    creator_email: "트리플 스타@example.com",
  },
  {
    title: "신선한 토마토 샐러드",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "잘 익은 토마토와 신선한 바질, 상큼한 비네그레트가 어우러진 가벼운 샐러드.",
    instructions: `
      1. 토마토 준비:
         신선한 토마토를 얇게 썰어 접시에 배열합니다.
    
      2. 허브와 양념 추가:
         다진 바질, 소금, 후추를 토마토 위에 뿌립니다.
    
      3. 샐러드 드레싱:
         올리브 오일과 발사믹 식초를 뿌립니다.
    
      4. 서빙:
         이 간단하고 맛있는 샐러드를 사이드 또는 가벼운 식사로 즐기세요.
    `,
    creator: "이모카세",
    creator_email: "이모카세@example.com",
  },
]

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`
).run()

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO meals (id, slug, title, image, summary, instructions, creator, creator_email)
    VALUES (null, @slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `)

  for (const meal of dummyMeals) {
    stmt.run(meal)
  }
}

initData()
