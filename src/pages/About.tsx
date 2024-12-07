import React from 'react'
import { AboutUs } from '@/features/AboutUs'
import { Footer } from '@/features/Footer'

const About = () => {
  return (
    <>
      <AboutUs />
      <Footer />
    </>
  )
}

// Opcional: Si quieres que esta página no use el RootLayout
//About.Layout = null

export default About 