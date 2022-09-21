import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar';
import { uxCasesData } from '../lib/data.js'

const HazteSocio: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paula Constanza</title>
        <meta name="description" content="haztesocio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />


      <main>
        {uxCasesData.map((c, i) => (
          <div key={i}>
            <h2>{c.title}</h2>
            { !c.subgroup && (
              <p>{c.subtitle}</p> 
            )} 
            { c.subgroup && c.subgroup.map((s, i) => (
              <div key={i}>
                <h3>{s.title}</h3>
                <p>{s.paragraph}</p>
              </div>
            ))}
          </div>
        ))}
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

export default HazteSocio;
