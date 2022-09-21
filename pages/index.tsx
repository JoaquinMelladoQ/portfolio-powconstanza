import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { landingData } from '../lib/data.js'
import Link from 'next/link'

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
                <Link key={i} href={w.path} className={styles.grid}>
                  <div className={styles.card}>
                    <h2>{w.title}</h2>
                    <p>{w.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Home
