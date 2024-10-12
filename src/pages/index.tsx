import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HomePage } from '@/features/Main'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <>
      <Head>
        <title>CrowDev's</title>
        <meta name='description' content='CrowDevs' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}></main>
      <HomePage />
    </>
  )
}