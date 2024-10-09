import Header from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={"/about"}>go About</Link>
    </main>
  )
}
