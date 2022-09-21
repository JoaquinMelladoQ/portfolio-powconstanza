import styles from './MainLayout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../Navbar'

export const MainLayout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Paula Constanza</title>
				<meta name="description" content="Home" />
				<link rel="icon" href="/favicon.ico" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,900&display=swap" rel="stylesheet"/>
			</Head>

			<Navbar />
			<main className={styles.main}>
				{children}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
