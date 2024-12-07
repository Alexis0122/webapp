import React, { FC, useState } from 'react'
import Cards from 'react-credit-cards-2'
import { Button, Grid, Group, TextInput } from '@mantine/core'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import './creditCardForm.css'

type Focused = 'name' | 'number' | 'expiry' | 'cvc' | undefined

interface CreditCardFormProps {
  action: (paymentMethod: string) => void
}

export const CreditCardForm: FC<CreditCardFormProps> = ({ action }) => {
  // Estado para manejar los valores y el foco de la tarjeta
  const [state, setState] = useState<{
    number: string
    expiry: string
    cvc: string
    name: string
    focus: Focused
  }>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: undefined
  })

  // Manejar cambios en los inputs
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  // Manejar el foco en los inputs
  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, focus: evt.target.name as Focused }))
  }

  // Manejador para envío del formulario
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    const paymentMethod = `${state.number.substring(0, 4)}-****`; // Ejemplo: toma solo los primeros dígitos
    action(paymentMethod);
    console.log('Submitted data:', state)
  }

  return (
    <div>
      <div className='container'>
        <div className='box'>
          <div className='creditCard'>
            <Grid gutter='md' mt='-50px' pb='10px'>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </Grid>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid gutter='xs' p='20px' pl='20px'>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  className='creditCard-texInput'
                  w='96%'
                  type='text'
                  size='sm'
                  name='name'
                  placeholder='Your Name'
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  className='creditCard-texInput'
                  w='96%'
                  type='text'
                  size='sm'
                  name='number'
                  placeholder='Card Number'
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  className='creditCard-texInput'
                  w='96%'
                  type='text'
                  size='sm'
                  name='expiry'
                  placeholder='Expiration Date (MM/YY)'
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  className='creditCard-texInput'
                  w='96%'
                  type='text'
                  size='sm'
                  name='cvc'
                  placeholder='CVC'
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Grid.Col>
              <Group justify='center' w='100%' h='50px' m='0'>
                <Button w='94%' h='90%' type='submit' mt='30px' size='20px' fullWidth>
                  Validate
                </Button>
              </Group>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}
