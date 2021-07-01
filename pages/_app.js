import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import { DefaultSeo } from 'next-seo'
import * as Sentry from '@sentry/node'

import '../styles/globals.css'
import '../styles/icofont.min.css'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

const tagManagerArgs = {
  gtmId: 'GTM-NKJ2485',
}

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps, err } = this.props
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Gosuac</title>

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </Head>
        <DefaultSeo
          title="Gosuac"
          description="Gosuac"
          openGraph={{
            type: 'website',
            locale: 'es_ES',
            url: 'https://www.gosuac.com/',
            site_name: 'Gosuac',
          }}
          twitter={{
            handle: '@gosuac',
            site: 'https://www.gosuac.com/',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} err={err} />
      </>
    )
  }
}

export default MyApp
