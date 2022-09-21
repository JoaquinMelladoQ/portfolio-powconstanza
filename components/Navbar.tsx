import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'
import {useRouter} from 'next/router';

export const Navbar = () => {
	const router = useRouter()
	const goingDown = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight /2,
			behavior: 'smooth',
		});
	}
	const handleNavigation = () => {
		if (router.asPath === '/') {
			goingDown()
		} else {
			router.push("/").then(() => goingDown()) 
		}
	};

	return (
		<nav className={styles.navbar}>
			<ActiveLink href="/" text="Paula Constanza" />
			<div className={styles.right}>
				<div className={styles.works}>
					<button onClick={() => handleNavigation()}>Works</button>
				</div>
				<ActiveLink href="/contact" text="Contact" />
			</div>
		</nav>
	)
}
