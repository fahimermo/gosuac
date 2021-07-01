import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import Head from 'next/head'
import ErrorPage from 'next/error'

import Title from '../../components/Title'
import Logo from '../../components/Logo'
import Image from '../../components/Image'
import Category from '../../components/Blog/Category'
import Tag from '../../components/Blog/Tag'

import { getPostBySlug, getAllPosts, getBlogPage, getContactPage } from '../../lib/squidex'

import styles from '../../styles/Post.module.css'
import BlogBox from '../../components/Blog/BlogBox'
import Menu from '../../components/Menu'

import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

export default function BlogDetail({ data, post, contactData }) {
  const router = useRouter()

  const [loadCarousel, setLoadCarousel] = useState(false)

  useEffect(() => {
    setLoadCarousel(true)
  }, [])

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

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
        items: 4,
      },
    },
  }

  return (
    <div className="blog_detail">
      <Menu contactData={contactData} ribbon="black" />

      <Logo src={data.darklogo.iv[0]} />

      <div className="container mx-auto">
        <Title type="medium" titleTop={data.title['es']} subtitle={data.subtitle['es']} />
        <div className="mb-12 sm:mb-24">
          <Category direction="flex-row" />
        </div>

        <h2 className={`${styles.title}`}>{post.title['es']}</h2>

        {post.categories['es'] &&
          post.categories['es'].map((category, key) => {
            return (
              <div className={`${styles.blog_category} w-auto inline-block my-4 mr-2`} key={key}>
                {category}
              </div>
            )
          })}

        <Image src={post.image.iv} altText={post.title['es']} className={`${styles.post_image} py-4`} />

        <div dangerouslySetInnerHTML={{ __html: post.content['es'] }} />

        <h3 className={`${styles.popular_posts} pt-12 pb-2 sm:py-4`}>Popular posts</h3>
        <div className={`${styles.green_bar} mb-2`}></div>

        <div className="flex">
          {loadCarousel && (
            <OwlCarousel className="partner-slides owl-carousel owl-theme" {...options}>
              <BlogBox data={post} type="small" />
              <BlogBox data={post} type="small" />
              <BlogBox data={post} type="small" />
              <BlogBox data={post} type="small" />
            </OwlCarousel>
          )}
        </div>

        <div className="sm:w-1/2 mb-16">
          <Tag />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getBlogPage()

  const post = await getPostBySlug(params.slug)
  const contactData = await getContactPage()

  return {
    props: {
      data,
      post: post.items[0].data,
      contactData,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths:
      posts.items &&
      posts.items.map(post => {
        return {
          params: {
            slug: post.data.slug['es'],
          },
        }
      }),
    fallback: false,
  }
}
