import React, { FC, useEffect, useState } from 'react'
import { ActionIcon, Button, Group, Input } from '@mantine/core'
import { LogoCrowDev } from '@/components/icons'
import { MagnifyingGlass } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'
import { useAuth } from '@/hooks/useAuth'
import './styles.css'

interface NavbarProps {
  isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const { goTo } = useNavigation()
  const { logout, token, isMounted } = useAuth()

  //TODO: arreglar el maldito navBar (hay que recargar la página para que se puedan ver los cambios) y estos deben verse inmediatamente se de click al login
  return (
    <Group h='100%' justify='space-between' p='sm' bg='tertiary.2' className='navbar'>
      {/* Logo */}
      <ActionIcon size='xl' variant='transparent' onClick={() => goTo('/')}>
        <LogoCrowDev />
      </ActionIcon>

      {/* Barra de búsqueda */}
      <Input
        placeholder='SocialPet, GetYourTrack, MC And Cheese....'
        radius='lg'
        w='30%'
        size='md'
        rightSection={<MagnifyingGlass />}
      />

      {/* Botones dinámicos */}
      <Group>
        {isMounted ? (
          token != null ? (
            // Si el usuario está autenticado, muestra el botón de logout
            <Button variant='white' onClick={logout}>
              Logout
            </Button>
          ) : (
            // Si no está autenticado, muestra los botones de login y registro
            <>
              <Button variant='white' onClick={() => goTo('/login')}>
                Login
              </Button>
              <Button onClick={() => goTo('/register')}>Register</Button>
            </>
          )
        ) : (
          // Mientras no esté montado, muestra un placeholder
          <Button variant='white' disabled>
            Loading...
          </Button>
        )}
      </Group>
    </Group>
  )
}
