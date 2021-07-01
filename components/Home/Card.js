import React from 'react'
import Image from '../Image'

import styles from './Card.module.css'

export default function Card({ data }) {
  return (
    <div className={`${styles.card} xl:w-5/12 p-4 sm:p-10 xl:mr-24 mb-4 sm:mb-10`}>
      <div className="flex mb-4 sm:mb-10 items-center">
        <div>
          {data && data.icon && <Image src={data.icon.iv[0]} altText={data.title['es']} className={styles.icon} />}
        </div>
        <div className={`${styles.title} ml-4`}>{data.title['es']}</div>
      </div>
      <div className={`${styles.text}`}>{data.description['es']}</div>
    </div>
  )
}
