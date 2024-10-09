import Link from "next/link"
import Logo from "@/assets/logo.png"
import "@/styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" href="/">
        <img src={Logo.src} />
        Header
      </Link>
      <nav className="nav">
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
