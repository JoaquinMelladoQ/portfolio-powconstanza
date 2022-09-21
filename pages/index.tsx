import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { landingData } from '../lib/data.js'

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
