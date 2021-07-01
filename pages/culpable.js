import React from 'react'
import Link from 'next/link'

import Profile from '../components/Culpable/Profile'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Title from '../components/Title'
import Image from '../components/Image'

import { getTeamPage, getContactPage } from '../lib/squidex'

import styles from '../styles/Culpable.module.css'

export default function Culpable({ data, contactData }) {
  return (
    <div className={styles.culpable}>
      <Menu contactData={contactData} rightBar="black" ribbon="black" />

      <div className={styles.hero}>
        <Logo src={data.darklogo.iv[0]} />

        <div className="container mx-auto mt-10 sm:mt-40 flex">
          <div className="sm:w-1/2 pb-4">
            <Title type="medium" titleTop={data.title['es']} description={data.description['es']} greenBar="black" />
          </div>
          <div className={`invisible sm:visible w-1/2 relative ${styles.invisible}`}>
            <div className={styles.hero_image}>
              <Image src={data.headerimage.iv[0]} altText="Culpable hero" width="480" height="320" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-40 mt-10">
        <Link href="/contacto">
          <a className={styles.contact_button}>
            ÚNETE A NUESTRO EQUIPO <i className="icofont-arrow-right" />
          </a>
        </Link>
        <div className="flex flex-wrap mt-1 sm:mt-20">
          {data['team-members'] &&
            data['team-members'].map((member, key) => {
              return <Profile data={member} key={key} />
            })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getTeamPage()
  const contactData = await getContactPage()

  console.log('data', data)

  return {
    props: {
      data,
      contactData,
    },
  }
}
