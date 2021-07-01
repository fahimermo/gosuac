import React from 'react'
import Link from 'next/link'
import moment from 'moment'

import Image from '../Image'

import styles from './BlogBox.module.css'

export default function BlogBox({ data, type = 'big' }) {
  return (
    <>
      {type === 'big' && (
        <div className="mb-10 sm:mb-20 sm:w-4/5">
          {data.image.iv && <Image src={data.image.iv} altText={data.title['es']} className={`${styles.blog_image}`} />}
          {data.title['es'] && (
            <Link as={`/blog/${data.slug['es']}`} href="/blog/[slug]">
              <a>
                <div className={`${styles.blog_title} mt-4`}>{data.title['es']}</div>
              </a>
            </Link>
          )}
          {/* <div className={`${styles.blog_date}`}>{date}</div>
      <div className={`${styles.blog_description}`}>{description}</div> */}
          {data.categories['es'] &&
            data.categories['es'].map((category, key) => {
              return (
                <div className={`${styles.blog_category} w-auto inline-block my-4 mr-2`} key={key}>
                  {category}
                </div>
              )
            })}
        </div>
      )}

      {type === 'small' && (
        <div className="sm:mb-20 w-full">
          {data.image.iv && (
            <Image src={data.image.iv} altText={data.title['es']} className={`${styles.small_blog_image}`} />
          )}
          <div>
            {data.title['es'] && (
              <Link as={`/blog/${data.slug['es']}`} href="/blog/[slug]">
                <a>
                  <div className={`${styles.small_blog_title} mt-4`}>{data.title['es']}</div>
                </a>
              </Link>
            )}

            <div className={`${styles.small_blog_date}`}>{moment(data.date.iv).format('MMM DD, YYYY')}</div>
          </div>
        </div>
      )}
    </>
  )
}
