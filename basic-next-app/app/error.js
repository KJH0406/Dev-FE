// 에러 페이지는 클라이언트 컴포넌트 요소로 관리되어야 함.
"use client"

import Link from "next/link"

const Error = () => {
  return (
    <main className="error">
      <h1>에러가 발생했습니다!</h1>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </main>
  )
}

export default Error
