import Header from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">go About</Link>
      </p>
      <p>
        <Link href="/blog">go Blog</Link>
      </p>
    </main>
  )
}
