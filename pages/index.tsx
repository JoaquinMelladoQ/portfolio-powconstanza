import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { landingData } from '../lib/data.js'

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
        {landingData.map((t, i) => (
          <div key={i}>
            <h1 className={styles.description}>{t.title}</h1>
            <p className={styles.about}>{t.about}</p>
            { t.subgroup.map((s, i) => (
              <div key={i}>
                <h2 className={styles.description}>{s.title}</h2>
                {s.works.map((w, i) => (
                  <div key={i} className={styles.grid}>
                    <a href={w.path} className={styles.card}>
                      <h2>{w.title}</h2>
                      <p>{w.description}</p>
                    </a>
                  </div>
                ))}
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

export default Home
