"use client"

import Link from "next/link"
import HeaderBackground from "./header-background"
import Logo from "@/assets/logo.png"
import styles from "@/styles/header/header.module.css"
import { usePathname } from "next/navigation"

const Header = () => {
  const path = usePathname()

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
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? styles.active : undefined}
            >
              Meals
            </Link>
            <Link
              href="/community"
              className={
                path.startsWith("/community") ? styles.active : undefined
              }
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
