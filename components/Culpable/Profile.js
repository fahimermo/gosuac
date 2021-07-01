import React from 'react'
import { useState, useEffect } from 'react'
import ReactCardFlipper from 'react-card-flipper'

import Image from '../Image'

import styles from './Profile.module.css'

export default function Profile({ data }) {
  console.log('data', data)
  const [loadFlipCard, setLoadFlipCard] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoadFlipCard(true)
    }
  }, [])

  return (
    <div
      className={`${styles.back} mr-24 mb-12 px-2 sm:px-0 sm:mr-16 md:mr-16 lg:mr-24`}
      style={{
        backgroundImage: `url(${process.env.assetsUrl}/${data.background.iv[0]})`,
      }}
    >
      {loadFlipCard && (
        <ReactCardFlipper width="320px" height="280px" behavior="hover">
          <div>
            <Image src={data.front['es'][0]} altText={data.name.iv} width="280" height="320" />
          </div>
          <div>
            <Image src={data.back['es'][0]} altText={data.name.iv} width="280" height="320" />
          </div>
        </ReactCardFlipper>
      )}
    </div>
  )
}
