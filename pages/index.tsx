import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
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
        <h1 className={styles.description}>
          Hello! I am Paula, UX/UI designer joining accesibility into service and product design.          
        </h1>
        <p className={styles.about}>
          I enjoy gathering good quality services with people and environments needs for a better life. I also love diving, art history and bycicle rides.
          Currently working at Coopeuch, a cooperative bank entity in Santiago, Chile. 
        </p>

        <h2 className={styles.description}>
          UX case studies
        </h2>

        <div className={styles.grid}>
          <a href="haztesocio" className={styles.card}>
            <h2>Hazte Socio Coopeuch &rarr;</h2>
            <p>Upgrade of the enrollment journey towards a multiple offer of products from our members interests, based on collected data about their needs.</p>
          </a>

          <a href="/simuladorunificado" className={styles.card}>
            <h2>Simulador Unificado &rarr;</h2>
            <p>Project to unify in a single credit simulator the experience of different offers according to the income profile of our users.</p>
          </a>

          <a
            href="/contigosalud"
            className={styles.card}
          >
            <h2>Contigo Salud &rarr;</h2>
            <p>A telemedicine solution for indigenous populations and other vulnerable situations during COVID-19 contingence. 
B2B app developed from a whole pro bono iniciative.</p>
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
