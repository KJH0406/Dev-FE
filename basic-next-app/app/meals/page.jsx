import Link from "next/link"

const MealsPage = () => {
  return (
    <main>
      <h1>Meals Main Page</h1>
      <p>
        <Link href="/meals/pizza-1">pizza-1</Link>
      </p>
      <p>
        <Link href="/meals/pizza-2">pizza-2</Link>
      </p>
    </main>
  )
}

export default MealsPage
