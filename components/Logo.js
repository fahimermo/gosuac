import React from 'react'
import Link from 'next/link'

import Image from './Image'

import styles from './Logo.module.css'
export default function Logo({ src, mobile = '' }) {
  return (
    <div>
      <div className={`${styles.logo} ${styles[mobile]}`}>
        <Link href="/">
          <a>
            <Image src={src} altText="GosuaC" width="124" height="35" />
          </a>
        </Link>
      </div>
    </div>
  )
}
