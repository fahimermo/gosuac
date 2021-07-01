import React from 'react'
import Title from '../Title'

import styles from './Tag.module.css'

export default function Tag() {
  return (
    <div>
      <div className="invisible sm:visible">
        <Title type="extraSmall" titleTop="TAGS" />
      </div>
      <div className="flex flex-wrap mt-10">
        <div className={`${styles.tag_name}`}>Name1</div>
        <div className={`${styles.tag_name}`}>Name2</div>
        <div className={`${styles.tag_name}`}>Tag Name1</div>
        <div className={`${styles.tag_name}`}>Tag Name2</div>
        <div className={`${styles.tag_name}`}>Tag Name2</div>
        <div className={`${styles.tag_name}`}>Tag Name2</div>
      </div>
    </div>
  )
}
