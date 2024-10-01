import React, { useEffect, useState, useCallback } from 'react'
import { Container } from '@mantine/core'
import { CampaignCardItem } from './CampaignCard.utils' // Asegúrate de que la ruta sea correcta
import { Carousel, Embla } from '@mantine/carousel'
import '@mantine/carousel/styles.css'

export const CampaignCard = () => {
  const [embla, setEmbla] = useState<Embla | null>(null)

  // Función para volver al primer slide al llegar al último
  const handleScroll = useCallback(() => {
    if (!embla) return

    // Obtener el índice del slide actual y la cantidad de slides
    const selectedIndex = embla.selectedScrollSnap()
    const totalSlides = embla.scrollSnapList().length

    // Si llegamos al último slide, volvemos al primero
    if (selectedIndex === totalSlides - 1) {
      setTimeout(() => embla?.scrollTo(1), 1000) // Vuelve al primer slide después de 1s
    }
  }, [embla])

  useEffect(() => {
    if (embla) {
      embla.on('select', handleScroll) // Escucha cuando cambia de slide
    }
    return () => {
      if (embla) {
        embla.off('select', handleScroll) // Desconecta el evento al desmontar
      }
    }
  }, [embla, handleScroll])

  return (
    <Container
      size='xs'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100px',
        marginTop: '-70px'
      }}
    >
      {/* Carrusel de Mantine */}
      <Carousel
        getEmblaApi={setEmbla} // Obtiene la instancia de Embla
        dragFree
        loop // Activa el bucle
        slideSize={{
          base: '100%',
          sm: '50%',
          md: '33.333333%'
        }}
        height='auto'
        withIndicators
        initialSlide={1} // Inicia en el primer slide
        styles={{
          indicator: {
            width: 60,
            height: 10,
            transition: 'width 250ms ease',
            '&[data-active]': {
              width: 40
            }
          },
          indicators: {
            bottom: '-30px' // Ajusta esta propiedad para mover los indicadores más abajo
          },
          container: {
            maxWidth: '1600px',
            width: '100%'
          }
        }}
      >
        {/* Slide 1 */}
        <Carousel.Slide style={{ padding: '30px 0px 0px 0px' }}>
          <CampaignCardItem
            title='Pre-Launch'
            subtitle='Build Anticipation'
            buttonText='Starts Now'
            fees='Fees Free; 5% of funds raised from reservations'
            letter='A'
            marginB={260}
            paddingL='175px'
          />
        </Carousel.Slide>

        {/* Slide 2 */}
        <Carousel.Slide style={{ padding: '0px 0px 0px 0px' }}>
          <CampaignCardItem
            title='Crowdfunding'
            subtitle='Raise Funds'
            buttonText='Start Your Campaign'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='B'
            sizeT='40px'
            marginB={10}
            marginT={310}
            width='443px'
            height='529px'
            paddingL='150px'
          />
        </Carousel.Slide>

        {/* Slide 3 */}
        <Carousel.Slide style={{ padding: '30px 0px 0px 0px' }}>
          <CampaignCardItem
            title='Learn More'
            subtitle='Explore Opportunities'
            buttonText='Learn More'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='C'
            marginB={260}
            paddingL='175px'
          />
        </Carousel.Slide>
        {/* Slide 2 */}
        <Carousel.Slide style={{ padding: '0px 0px 0px 0px' }}>
          <CampaignCardItem
            title='Crowdfunding'
            subtitle='Raise Funds'
            buttonText='Start Your Campaign'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='B'
            sizeT='40px'
            marginB={10}
            marginT={310}
            width='443px'
            height='529px'
            paddingL='150px'
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  )
}
