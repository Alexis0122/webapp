// CampaignCard.tsx
import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { CampaignCardItem } from './CampaignCard.utils';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/carousel/styles.css';
import classes from './CampaignCard.module.css';

export const CampaignCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Detectar tamaño de pantalla para cambiar diseño responsivo
  const isLargeScreen = useMediaQuery('(min-width: 1024px)'); // Pantallas grandes
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)'); // Pantallas medianas

  // Definir slideSize según tamaño de la pantalla
  const slideSize = isLargeScreen ? '33.3333%' : isMediumScreen ? '50%' : '100%';

  // Datos de los slides
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
      title: 'Learn More',
      subtitle: 'Explore Opportunities',
      buttonText: 'Learn More',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'C',
    },
  ];

  return (
    <div>
      <Carousel
        dragFree
        slideSize={slideSize} // Aplicar el tamaño dinámico de los slides según la pantalla
        slideGap="20px" // Espacio constante entre las tarjetas
        align="center"
        initialSlide={1}
        onSlideChange={setActiveSlide}
      >
        {slides.map((slide, index) => (
          <Carousel.Slide
          
            key={index}
            className={index === activeSlide ? classes.activeSlide : classes.inactiveSlide}
            style={{
              display: 'flex', // Flex para alinear el contenido dentro de la tarjeta
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px', // Espaciado interno
              height: isLargeScreen ? '800px' : isMediumScreen ? '700px' : '700px', // Altura dinámica
              width: isLargeScreen ? '150px' : isMediumScreen ? '100%' : '100%', // Ancho dinámico
            }}
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
  );
};