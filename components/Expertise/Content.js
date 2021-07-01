import React from 'react'
import Image from '../Image'

import styles from './Content.module.css'

export default function Content({ data, allCards }) {
  // console.log("data", data);
  // console.log("allCards", allCards);
  const getCardData = id => {
    for (const items of allCards.items) {
      if (items.id === id) {
        return items.data
      }
    }
  }
  return (
    <div className="sm:flex">
      <div className={`sm:w-1/2`}>
        {data.cards.map((cardId, key) => {
          return (
            <div className="p-10" key={key}>
              <div>
                <Image
                  src={getCardData(cardId).icon.iv[0]}
                  altText={getCardData(cardId).title['es']}
                  className={styles.icon}
                  width="50px"
                  height="50px"
                />
              </div>
              <div>
                <div className={`${styles.title} mb-4 sm:mb-0`}>{getCardData(cardId).title['es']}</div>
                <div className={`${styles.text}`}>{getCardData(cardId).description['es']}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={`sm:w-1/2 flex justify-center`}>
        <Image src={data.featureimage[0]} altText={data.title} className="w-9/12" width="400px" height="372px" />
      </div>
    </div>
  )
}
