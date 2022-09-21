import Link from "next/link"
import styles from './Navbar.module.css'

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<h1>Paula Constanza</h1>
			</Link>
			<Link href="/contact">
				<h2>Contact</h2>
			</Link>
		</nav>
	)
}
