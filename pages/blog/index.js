import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import Title from '../../components/Title'
import Logo from '../../components/Logo'
import BlogBox from '../../components/Blog/BlogBox'
import Category from '../../components/Blog/Category'

import { getBlogPage, getAllPosts, getContactPage } from '../../lib/squidex'

import styles from '../../styles/Blog.module.css'
import Tag from '../../components/Blog/Tag'
import Menu from '../../components/Menu'
import Container from '../../components/Container'

export default function Blog({ data, posts, postInfo, contactData }) {
  const [postsCut, setPostsCut] = useState(posts ? posts.slice(0, 4) : [])

  const handlePageClick = event => {
    console.log(event.selected)
    if (posts) setPostsCut(posts.slice(event.selected * 4, event.selected * 4 + 4))
  }
  return (
    <div>
      <Menu contactData={contactData} ribbon="black" />

      <Logo src={data.darklogo.iv[0]} />

      <Container>
        <h1 className={`${styles.page_title} mb-2`}>{data.bigtitle['es']}</h1>

        <Title
          type="medium"
          titleTop={data.title['es']}
          description={data.subtitle['es']}
          image={data.headerimage.iv[0]}
        />

        <div className={`flex mt-12 ${styles.desktop}`}>
          <div className="w-1/2">
            <div className="mb-24">
              <Category direction="flex-col" />
            </div>

            {postsCut && postsCut[0] && <BlogBox data={postsCut[0].data} />}
            {postsCut && postsCut[1] && <BlogBox data={postsCut[1].data} />}

            <Tag />
          </div>

          <div className={`w-1/2 sm:mt-24 lg:mt-0 ${styles.responsive_height}`}>
            {postsCut && postsCut[2] && <BlogBox data={postsCut[2].data} />}
            {postsCut && postsCut[3] && <BlogBox data={postsCut[3].data} />}
            <div className="mt-48">
              <ReactPaginate
                previousLabel={<i className="icofont-curved-left paginate_arrow" />}
                nextLabel={<i className="icofont-curved-right paginate_arrow" />}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={postInfo.pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={e => handlePageClick(e)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>
        <div className={`mt-4 ${styles.mobile}`}>
          <div className="mb-8">
            <Category direction="flex-col" />
          </div>

          <div className="w-10/12 mx-auto">
            {postsCut && postsCut[0] && <BlogBox data={postsCut[0].data} />}
            {postsCut && postsCut[1] && <BlogBox data={postsCut[1].data} />}

            {postsCut && postsCut[2] && <BlogBox data={postsCut[2].data} />}
            {postsCut && postsCut[3] && <BlogBox data={postsCut[3].data} />}
          </div>
          <div className="mt-16">
            <ReactPaginate
              previousLabel={<i className="icofont-curved-left paginate_arrow" />}
              nextLabel={<i className="icofont-curved-right paginate_arrow" />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={postInfo.pageCount}
              marginPagesDisplayed={0}
              pageRangeDisplayed={2}
              onPageChange={e => handlePageClick(e)}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>

          <Tag />
        </div>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getBlogPage()

  const posts = await getAllPosts()

  const pageCount = Math.ceil(posts.total / 4)

  const postInfo = {
    totalPost: posts.total,
    pageCount,
  }

  const contactData = await getContactPage()

  console.log('blog page', data)

  return {
    props: {
      data,
      posts: posts.items,
      postInfo,
      contactData,
    },
  }
}
