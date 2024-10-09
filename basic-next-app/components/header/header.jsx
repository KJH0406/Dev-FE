import Link from "next/link"
import HeaderBackground from "./header-background"
import Logo from "@/assets/logo.png"
import styles from "@/styles/header/header.module.css"
import NavLink from "./nav-link"

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
            <NavLink href={"/meals"} children={"Meals"} />
            <NavLink href={"/community"} children={"Community"} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
