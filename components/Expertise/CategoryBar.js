import React from 'react'
import styles from './CategoryBar.module.css'

export default function CategoryBar({ titles, itemId, setCurrenTitle }) {
  const selectCurrent = (index, title) => {
    if (index === itemId) {
      setCurrenTitle(title)
      return 'selected'
    } else return ''
  }

  return (
    <>
      <div className={styles.background}>
        <div className={`container mx-auto flex`}>
          <ul className={`w-full sm:w-11/12 flex justify-between px-4 pt-4 sm:px-10 sm:pt-10 sm:pr-16 ${styles.menubar}`}>
            {titles &&
              titles.map((title, index) => {
                return (
                  <li key={index} className={selectCurrent(index, title)}>
                    <a href={`#${title}`}>{title}</a>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </>
  )
}
