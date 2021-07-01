import React from 'react'
import { useEffect, useState } from 'react'
import Sticky from 'react-stickynode'

import CategoryBar from '../components/Expertise/CategoryBar'
import Content from '../components/Expertise/Content'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Title from '../components/Title'
import Image from '../components/Image'

import { getExpertisePage, getContactPage, getAllCards } from '../lib/squidex'

import styles from '../styles/Expertise.module.css'

export default function Expertise({ data, titles, contactData, allCards }) {
  const [scrollPosition, setSrollPosition] = useState(0)
  const [currentTitle, setCurrentTitle] = useState("default")

  const handleScroll = () => {
    let position = Math.floor(window.pageYOffset / 450) - 1
    if (position < 0) position = 0
    if (scrollPosition !== position) setSrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getClass = (titletop, key) => {
    if (currentTitle === "default" && key === 0) {
      return "show_expertise"
    }
    if (titletop === currentTitle) {
      return "show_expertise"
    }
  }
  console.log("currentTitle", currentTitle)

  return (
    <div>
      <Menu contactData={contactData} rightBar="black" ribbon="black" />

      <div className={styles.hero}>
        <Logo src={data.darklogo.iv[0]} mobile="background_green" />

        <div className="container mx-auto mt-12 sm:mt-40 flex">
          <div className="sm:w-1/2 pb-4">
            <Title
              type="medium"
              titleTop={data.title['es']}
              subtitle={data.subtitle['es']}
              description={data.description['es']}
              greenBar="black"
            />
          </div>
          <div className="invisible sm:visible w-1/2 relative">
            <div className={styles.hero_image}>
              <Image src={data.headerimage.iv[0]} altText="Expertise hero" width="400" height="320" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto z-0">
        <Title
          type="medium"
          titleTop={data.title["es"]}
          subtitle={data.subtitle["es"]}
          description={data.description["es"]}
        />
      </div> */}

      <Sticky enabled={true} top={0}>
        {/* <CategoryBar titles={titles} itemId={scrollPosition} setCurrenTitle={setCurrentTitle} /> */}
        <CategoryBar titles={titles} setCurrenTitle={setCurrentTitle} />
      </Sticky>

      <div className="container mx-auto">
        {data.expertises['es'] &&
          data.expertises['es'].map((expertise, key) => {
            return (
              <div className={`py-16 sm:py-32 ${styles[getClass(expertise.titletop, key)]} ${styles.hide}`} key={key} id={expertise.titletop}>
                <Title type="expertise" titleTop={expertise.titletop} titleBottom={expertise.titlebottom} />
                <Content data={expertise} allCards={allCards} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getExpertisePage()
  const titles = data.expertises['es'].map(section => section.titletop)
  const contactData = await getContactPage()
  const allCards = await getAllCards()
  // console.log("allcards", allCards);

  // console.log(data.expertises["es"]);
  // console.log(titles);

  return {
    props: {
      data,
      titles,
      contactData,
      allCards,
    },
  }
}
