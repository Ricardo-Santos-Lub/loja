import Link from "next/link";
import styles from './appbar.module.css'

export default function AppBar() {
    return (
       <header className={styles.header}>
        <Link href="/">Pague & Pesque</Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Produtos</Link>
          <Link href="/">Contato</Link>
        </nav>
      </header>
    )
}