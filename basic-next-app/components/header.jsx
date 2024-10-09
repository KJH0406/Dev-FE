import Logo from "@/assets/logo.png"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <Link href="/">
        <img src={Logo.src} />
        Header
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
