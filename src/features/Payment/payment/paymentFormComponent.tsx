import React, { FC, useState } from 'react'
import { Grid, Box, Button, createTheme, Text, Image, Anchor, MantineProvider } from '@mantine/core'
import { Headlights } from '@phosphor-icons/react'
import { unset } from 'lodash'
import { relative } from 'path'
import { CreditCardForm } from '@/features/Payment/components/CreditCard'
import Logo from '@/assets/CrowdevLogo.svg'
import ThankYouMessage from '../components/ThankYouMessage/ThankYouMessage'
import { CarouselPerk } from '../components/CarouselPerk/CarouselPerk'
import { TotalPaymentCard } from '../components/TotalPayment'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'react-toastify'

const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always'
      }
    })
  }
})

interface PaymentFormComponentProps {
  projectId: number;
}

export const PaymentFormComponent: FC<PaymentFormComponentProps> = ({projectId}) => {
  const [grandTotalPayment, setGrandTotalPayment] = useState(0);

  const { token } = useAuth();

  const handleSubmitToAPI = async (paymentMethod: string) => {
    const data = {
      projectId,
      amount: grandTotalPayment,
      paymentMethod,
    };

    try {
      const response = await axios.post(
        'https://crowdevsserviceapi.azurewebsites.net/api/v1/Patronage',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Gracias por contribuir')
    } catch (error) {
      console.error('Error al enviar los datos al API:', error);
    }
  };

  return (
    <MantineProvider theme={theme}>
      <div style={{ padding: '20px' }}>
        <Grid gutter='md'>
          {/* Primera fila: un contenedor grande */}

          <Grid.Col span={{ base: 12, md: 8.5 }}>
            <Box
              style={{
                height: '480px',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '20px'
              }}
            >
              {/* hola */}
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Box
                  style={{
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px'
                  }}
                >
                  <Grid style={{ width: '100%', padding: '20px' }}>
                    {/* hola */}
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                      <Box
                        style={{
                          height: '100px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '20px'
                        }}
                      >
                        <Text fw={700} size='70px' c='gray.7'>
                          Payment page
                        </Text>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                      <Box
                        style={{
                          height: '100px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '20px'
                        }}
                      >
                        <Image style={{ paddingTop: '20px' }} src={Logo} />
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 12 }}>
                      <Box
                        style={{
                          height: '102.4%',
                          display: 'flex',
                          border: '4px solid #FF6B6B',

                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '20px',
                          position: 'relative',
                          borderRadius: '16px'
                        }}
                      >
                        <ThankYouMessage />
                      </Box>
                    </Grid.Col>
                  </Grid>
                </Box>
              </Grid.Col>
              {/* Primera fila: dos contenedores pequeños al lado del grande */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Box
                  style={{
                    height: '400px',
                    border: '4px solid #FF6B6B',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    borderRadius: '16px'
                  }}
                >
                  <TotalPaymentCard grandTotalPayment={grandTotalPayment} onGrandTotalChange={setGrandTotalPayment}/>
                </Box>
              </Grid.Col>
            </Box>
          </Grid.Col>

          {/* Primera fila: dos contenedores pequeños al lado del grande */}
          <Grid.Col span={{ base: 12, md: 3.5 }}>
            <Box
              style={{
                height: '400px',
                border: '4px solid #FF6B6B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px',
                borderRadius: '16px',
                marginTop: '40px'
              }}
            >
              <CreditCardForm action={(paymentMethod) => handleSubmitToAPI(paymentMethod)} />
              <Text fw={800} fz='lg' c='gray.7'>
                Learn More About Our{' '}
                <Anchor
                  component='a'
                  variant='gradient'
                  gradient={{ from: 'red.7', to: 'red.9' }}
                  href='#text-props'
                  fw={800}
                  fz='lg'
                >
                  Data Protection Measures
                </Anchor>
                .
              </Text>
            </Box>
          </Grid.Col>

          {/* Segunda fila: tres contenedores pequeños */}
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <Box
              style={{
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}
            >
              {/* Tercio 1 */}
              <CarouselPerk />
            </Box>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  )
}
