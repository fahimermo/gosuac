import React from 'react'
import styles from './Category.module.css'

/**
 * flex-row
 * flex-col
 * @param {string} direction
 */
export default function Category({ direction = 'flex-row' }) {
  return (
    <>
      <div className={`flex ${direction} ${styles.desktop} sm:flex-row lg:flex-col`}>
        <div className="flex my-2 mr-8">
          <div className={`${styles.category_name}`}>NOTICIAS RECIENTES</div>
          <div className={`${styles.category_count}`}>33</div>
        </div>
        <div className="flex my-2 mr-8">
          <div className={`${styles.category_name}`}>NOTICIAS RECIENTES</div>
          <div className={`${styles.category_count}`}>33</div>
        </div>
        <div className="flex my-2 mr-8">
          <div className={`${styles.category_name}`}>NOTICIAS RECIENTES</div>
          <div className={`${styles.category_count}`}>33</div>
        </div>
      </div>
      <div className={`${styles.mobile}`}></div>
    </>
  )
}
