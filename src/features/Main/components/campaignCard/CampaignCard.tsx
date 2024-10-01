import React from 'react';
import { Container } from '@mantine/core';
import { CampaignCardItem } from './CampaignCard.utils';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './CampaignCard.module.css';

export const CampaignCard = () => {
  return (
    // Contenedor que centra el Carousel
    <Container
      style={{
        display: 'flex', // Flexbox para centrar
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        minHeight: '100vh', // Ocupa el 100% del alto de la pantalla
        width: '100vw', // Ocupa el 100% del ancho de la pantalla
      }}
    >
      <Carousel
        classNames={classes}
        align="center"
        dragFree
        loop
        slideSize="25%" // Ajusta el tamaño de cada slide a un 25% del contenedor
        withIndicators
        initialSlide={1}
        slideGap="md" // Cambia el espacio entre los slides a `md`
        controlsOffset="xl"
        controlSize={50}
        
        styles={{
          container: {
            width: '1350px', // Asegura que el carrusel use el 100% del contenedor
          },
        }}
      >
        {/* Slide 1 */}
        <Carousel.Slide style={{ padding: '30px 0' }}>
          <CampaignCardItem
            title='Pre-Launch'
            subtitle='Build Anticipation'
            buttonText='Starts Now'
            fees='Fees Free; 5% of funds raised from reservations'
            letter='A'
          />
        </Carousel.Slide>

        {/* Slide 2 */}
        <Carousel.Slide style={{ padding: '30px 0' }}>
          <CampaignCardItem
            title='Crowdfunding'
            subtitle='Raise Funds'
            buttonText='Start Your Campaign'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='B'
          />
        </Carousel.Slide>

        {/* Slide 3 */}
        <Carousel.Slide style={{ padding: '30px 0' }}>
          <CampaignCardItem
            title='Learn More'
            subtitle='Explore Opportunities'
            buttonText='Learn More'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='C'
          />
        </Carousel.Slide>

        {/* Slide 4 */}
        <Carousel.Slide style={{ padding: '30px 0' }}>
          <CampaignCardItem
            title='Learn More'
            subtitle='Explore Opportunities'
            buttonText='Learn More'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='C'
          />
        </Carousel.Slide>

        {/* Slide 5 */}
        <Carousel.Slide style={{ padding: '30px 0' }}>
          <CampaignCardItem
            title='Learn More'
            subtitle='Explore Opportunities'
            buttonText='Learn More'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter='C'
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};
