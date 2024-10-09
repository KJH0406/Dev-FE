import Link from "next/link"
import HeaderBackground from "./headerBackground"
import Logo from "@/assets/logo.png"
import "@/styles/header/header.css"

const Header = () => {
  return (
    <header className="header">
      <HeaderBackground />
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
