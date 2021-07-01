import React from 'react'
import Image from './Image'

import styles from './Title.module.css'

export default function Title({
  type = '',
  titleTop = '',
  titleBottom = '',
  subtitle = '',
  description = '',
  greenBar = 'yes',
  image,
}) {
  return (
    <>
      {type === 'expertise' && (
        <>
          <div className={styles.titulo}>
            <div>{titleTop}</div>
            <div className={styles.bottom}>{titleBottom}</div>
            {greenBar === 'yes' && <div className={styles.green_background} />}
          </div>
          <div className={styles.titulo_subtitle}>{subtitle}</div>
        </>
      )}
      {type === 'medium' && (
        <>
          <div>
            <div className={`${styles.title_medium} relative`}>
              {titleTop}
              <div className={`${styles.image}`}>{image && <Image src={image} />}</div>
            </div>
          </div>
          {greenBar === 'yes' && <div className={`${styles.greenbar_medium}`} />}
          {greenBar === 'black' && <div className={`${styles.greenbar_medium_black}`} />}
          <div className={`${styles.subtitle_medium} mt-6`}>{subtitle}</div>
          <div className={`${styles.description_medium}`}>{description}</div>
        </>
      )}
      {type === 'extraSmall' && (
        <>
          <div className={`${styles.title_extra_small}`}>
            {titleTop}
            <div className={`${styles.greenbar_extra_small}`} />
          </div>

          <div className={`${styles.subtitle_extra_small}`}>{subtitle}</div>
          <div className={`${styles.description_extra_small}`}>{description}</div>
        </>
      )}
    </>
  )
}
