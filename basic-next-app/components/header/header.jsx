import Link from "next/link"
import HeaderBackground from "./headerBackground"
import Logo from "@/assets/logo.png"
import styles from "@/styles/header/header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderBackground />
      <Link className={styles.logo} href="/">
        <img src={Logo.src} />
        Header
      </Link>
      <nav className={styles.nav}>
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
