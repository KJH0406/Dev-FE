import Link from "next/link"

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>페이지를 찾지 못했습니다</h1>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </main>
  )
}

export default NotFound
