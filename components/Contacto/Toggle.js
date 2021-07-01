import React, { useState } from 'react'
import styles from './Toggle.module.css'
export default function Toggle() {
  const [showContacts, setShowContacts] = useState(false)
  return (
    <div className={`${styles.toggle} sm:invisible`}>
      <div className={`${styles.emoticon}`} onClick={() => setShowContacts(!showContacts)}>
        <i className="icofont-laughing"></i>
      </div>
      {showContacts && (
        <div className="relative">
          <div className={`${styles.circle} ${styles.at}`}>
            <i className="icofont-at"></i>
          </div>
          <div className={`${styles.circle} ${styles.phone}`}>
            <i className="icofont-phone"></i>
          </div>
          <div className={`${styles.circle} ${styles.map}`}>
            <i className="icofont-google-map"></i>
          </div>
        </div>
      )}
    </div>
  )
}
