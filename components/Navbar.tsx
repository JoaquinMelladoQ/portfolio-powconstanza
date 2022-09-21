import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ActiveLink href="/" text="Paula Constanza" />
			<ActiveLink href="/contact" text="Contact" />
		</nav>
	)
}
