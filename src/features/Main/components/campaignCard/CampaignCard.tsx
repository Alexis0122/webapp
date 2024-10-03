// CampaignCard.tsx
import React, { useState } from 'react'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import classes from './CampaignCard.module.css'
import { CampaignCardItem } from './CampaignCard.utils'
import { useMantineTheme } from '@mantine/core'

export const CampaignCard = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  // Datos de los slides
  const slides = [
    {
      title: 'Pre-Launch',
      subtitle: 'Build Anticipation',
      buttonText: 'Starts Now',
      fees: 'Fees Free; 5% of funds raised from reservations',
      letter: 'A'
    },
    {
      title: 'Crowdfunding',
      subtitle: 'Raise Funds',
      buttonText: 'Start Your Campaign',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'B'
    },
    {
      title: 'Learn More',
      subtitle: 'Explore Opportunities',
      buttonText: 'Learn More',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'C'
    },
    {
      title: 'Crowdfunding',
      subtitle: 'Raise Funds',
      buttonText: 'Start Your Campaign',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'B'
    }
  ]
  console.log(`este es el  y este es el ${activeSlide}`)


  return (
    <div
      className={classes.container}
    >
      <Carousel
        dragFree
        initialSlide={1}
        className={classes.carousel}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'xl' }}
        loop
        align='center'
        onSlideChange={setActiveSlide}
      >
        {slides.map((slide, index) => (
          <Carousel.Slide
            key={index}
            className={index === activeSlide ? classes.activeSlide : classes.inactiveSlide}

          >
            <CampaignCardItem
              title={slide.title}
              subtitle={slide.subtitle}
              buttonText={slide.buttonText}
              fees={slide.fees}
              letter={slide.letter}
              isActive={index === activeSlide}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}
