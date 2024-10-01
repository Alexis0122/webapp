import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { CampaignCardItem } from './CampaignCard.utils';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './CampaignCard.module.css';
import styles from './CampaignCard.module.css';

export const CampaignCard = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Estado para rastrear el slide activo

  return (
    <Container
    className={styles.Container}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <Carousel
        classNames={classes}
        align="center"
        dragFree
        loop
        slideSize="25%"
        withIndicators
        initialSlide={1}
        slideGap="md"
        controlsOffset="xl"
        controlSize={50}
        onSlideChange={(index) => setActiveSlide(index)} // Actualiza el slide activo
        styles={{ container: { width: '1300px', height:'700px' } }}
      >
        {/* Mapear slides para simplificar */}
        {slides.map((slide, index) => (
          <Carousel.Slide
            key={index}
            className={
              index === activeSlide ? classes.activeSlide : classes.inactiveSlide
            } // Añadir clases dinámicas
          >
            <CampaignCardItem
              title={slide.title}
              subtitle={slide.subtitle}
              buttonText={slide.buttonText}
              fees={slide.fees}
              letter={slide.letter}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

const slides = [
  {
    title: 'Pre-Launch',
    subtitle: 'Build Anticipation',
    buttonText: 'Starts Now',
    fees: 'Fees Free; 5% of funds raised from reservations',
    letter: 'A',
  },
  {
    title: 'Crowdfunding',
    subtitle: 'Raise Funds',
    buttonText: 'Start Your Campaign',
    fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
    letter: 'B',
  },
  {
    title: 'Learn More',
    subtitle: 'Explore Opportunities',
    buttonText: 'Learn More',
    fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
    letter: 'C',
  },
  {
    title: 'Crowdfunding',
    subtitle: 'Raise Funds',
    buttonText: 'Start Your Campaign',
    fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
    letter: 'B',
  },
  {
    title: 'Learn More',
    subtitle: 'Explore Opportunities',
    buttonText: 'Learn More',
    fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
    letter: 'C',
  },
];