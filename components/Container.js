import React from 'react'
import styles from './Container.module.css'
export default function Container({ className, children }) {
  return <div className={`container mx-auto my-16 sm:my-40 ${className} ${styles.container}`}>{children}</div>
}
