import React from 'react'
import Logo from '../Logo'
import styles from './Hero.module.css'

export default function Hero({ data }) {
  return (
    <div className={`${styles.hero} h-screen`}>
      <img src={`${process.env.assetsUrl}/${data.herologo.iv[0]}`} alt="g" className={`${styles.g}`} />
      <Logo src={`${data.lighlogo.iv[0]}`} mobile="background_transparent" />

      <div className={`container mx-auto my-32 mb-40 sm:my-48 sm:mb-0 py-10`}>
        <div className={`${styles.headline_top} my-4`}>{data.herotitletop['es']}</div>
        <div className={`${styles.headline_bottom}`}>{data.herotitlebotton['es']}</div>
        <div className={`${styles.greenbar} mt-2`} />
        <ul className={`mt-56`}>
          <li>
            <a href="#">
              <i className="icofont-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icofont-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icofont-linkedin" />
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.long_down_arrow} mx-auto`}>
        <a href="#below_home_hero">
          {/* <i className="icofont-long-arrow-down"></i> */}
          <img src="/down_arrow.svg" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}
