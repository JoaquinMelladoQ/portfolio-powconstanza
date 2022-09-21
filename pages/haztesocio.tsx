import type { NextPage } from 'next'
import { uxCasesData } from '../lib/data.js'

const HazteSocio: NextPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default HazteSocio;
