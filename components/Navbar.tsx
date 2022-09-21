import Link from "next/link"
import styles from './Navbar.module.css'

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<h2>Paula Constanza</h2>
			</Link>
			<Link href="/contact">
				<h2>Contact</h2>
			</Link>
		</nav>
	)
}
