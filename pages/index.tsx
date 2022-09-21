import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paula Constanza</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Paula Constanza
        </h1>

        <h2 className={styles.description}>
          Hello! I am Paula, UX/UI designer joining accesibility into service and product design.          
        </h2>
        <p className={styles.description}>
          I enjoy gathering good quality services with people and environments needs for a better life. I also love diving, art history and bycicle rides.
          Currently working at Coopeuch, a cooperative bank entity in Santiago, Chile. 
        </p>

        <h2 className={styles.description}>
          UX case studies
        </h2>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Hazte Socio Coopeuch &rarr;</h2>
            <p>Upgrade of the enrollment journey towards a multiple offer of products from our members interests, based on collected data about their needs.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Simulador Unificado &rarr;</h2>
            <p>Project to unify in a single credit simulator the experience of different offers according to the income profile of our users.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
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

export default Home
