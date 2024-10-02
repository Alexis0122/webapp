// CampaignCard.tsx
import React, { useState } from 'react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import '@mantine/carousel/styles.css'
import classes from './CampaignCard.module.css'
import { CampaignCardItem } from './CampaignCard.utils' // Importa el componente que usarás para renderizar cada tarjeta

export const CampaignCard = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  // Detectar tamaño de pantalla para cambiar diseño responsivo
  const isLargeScreen = useMediaQuery('(min-width: 1024px)') // Pantallas grandes
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)') // Pantallas medianas
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  // Definir el padding-left dinámico
  const Ancho = isSmallScreen ? '95%' : isMediumScreen ? '75%' : '75%';
  // Definir slideSize según tamaño de la pantalla
  const slideSize = isLargeScreen ? '33.3333%' : isMediumScreen ? '50%' : '100%'
  const widt = isLargeScreen ? '1000px' : isMediumScreen ? '500px' : '100px'

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
    },
    {
      title: 'Learn More',
      subtitle: 'Explore Opportunities',
      buttonText: 'Learn More',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'C'
    },
    {
      title: 'Learn More',
      subtitle: 'Explore Opportunities',
      buttonText: 'Learn More',
      fees: 'Fees 5%-8%; 4-5% of funds raised + transaction fees',
      letter: 'C'
    },
    {
      title: 'H',
      subtitle: 'Build Anticipation',
      buttonText: 'Starts Now',
      fees: 'Fees Free; 5% of funds raised from reservations',
      letter: 'A'
    },
    
  ]

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',            // Utiliza flexbox para centrar el contenedor
        justifyContent: 'center',   // Centrado horizontal
        alignItems: 'center',  
      }}
    >
      <Carousel
        dragFree
        initialSlide={1}
        w={Ancho}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'xl' }}
        loop
        align='center'
        onSlideChange={setActiveSlide}
        m={50}


      >

          
        {slides.map((slide, index) => (
          <Carousel.Slide
            key={index} // Se mueve la key aquí
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
