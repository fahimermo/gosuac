import React from 'react'
import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import Card from '../components/Home/Card'
import Hero from '../components/Home/Hero'
import Logo from '../components/Logo'
import Image from '../components/Image'
import Menu from '../components/Menu'
import Container from '../components/Container'

import { getHomePage, getContactPage } from '../lib/squidex'

import TagManager from 'react-gtm-module'

import styles from '../styles/Home.module.css'

const OwlCarousel = dynamic(import('react-owl-carousel3'))

const tagManagerArgs = {
  dataLayer: {
    event: 'PageView',
    page: '/home',
  },
  dataLayerName: 'PageDataLayer',
}

export default function Home({ data, contactData }) {
  React.useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)
  }, [])

  const options = {
    autoplay: true,
    nav: true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    loop: true,
    navText: ["<span class='owl_carousel_prev'>↼</span>", "<span class='owl_carousel_next'>⇁</span>"],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  }

  const [loadCarousel, setLoadCarousel] = useState(false)

  useEffect(() => {
    setLoadCarousel(true)
  }, [])

  return (
    <>
      <Menu contactData={contactData} ribbon="black" />

      <Hero data={data} />
      <div id="below_home_hero" />
      <Logo src={data.darklogo.iv[0]} mobile="background_transparent" />

      <Container>
        <div className={`${styles.category}`}>{data.whatwedo.smaltitle['es']}</div>
        <div className={`${styles.greenbar_category}`} />
        <div className={`${styles.title} mt-4 mb-4 sm:mb-10`}>
          {data.whatwedo.title['es']}
          <div className={`${styles.greenbar_title}`} />
        </div>

        <div className="px-4 sm:px-0">
          <p className={`${styles.text_title}`}>{/* ¿Cansado de que te vendan la moto?{" "} */}</p>
          <div
            className={`${styles.text_content}`}
            dangerouslySetInnerHTML={{ __html: data.whatwedo.description['es'] }}
          />
          <p className={`${styles.text_bottom}`}>
            {/* No somos tu agencia de marketing, queremos ser parte de tu equipo. */}
          </p>

          <div className={`${styles.title_small} mt-10`}>{data.whatwedo.imagetitle['es']}</div>
          <div className={`${styles.greenbar_title_small}`} />

          <div className="mt-4 mb-20">
            <Image src={data.whatwedo.image.iv[0]} altText="What we do" />
          </div>

          <div className="flex flex-wrap">
            {data.cards &&
              data.cards.map((card, idx) => {
                return <Card key={idx} data={card} />
              })}
          </div>
        </div>

        <div className={`${styles.title_medium} mt-10`}>{data.clients.title['es']}</div>
        <div className={`${styles.greenbar_medium}`} />

        <div className={`${styles.description_medium} my-4 sm:my-8`}>{data.clients.description['es']}</div>

        <div className="mt-16 mb-32">
          {loadCarousel && (
            <OwlCarousel className="partner-slides owl-carousel owl-theme" {...options}>
              {data.clients.logos.iv[0].image.map((src, idx) => {
                return (
                  <div key={idx}>
                    <Image src={src} />
                  </div>
                )
              })}
            </OwlCarousel>
          )}
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const data = await getHomePage()
  const contactData = await getContactPage()

  return {
    props: {
      data,
      contactData,
    },
  }
}
