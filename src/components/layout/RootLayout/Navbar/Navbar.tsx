import React, { FC } from 'react'
import { ActionIcon, Button, Group, Input } from '@mantine/core'
import { LogoCrowDev } from '@/components/icons'
import { MagnifyingGlass } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation' // Importamos el hook personalizado
import './styles.css'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { goTo } = useNavigation() // Usamos el hook personalizado para navegación

  return (
    <Group h='100%' justify='space-between' p='sm' bg='tertiary.2' className='navbar'>
      <ActionIcon size='xl' variant='transparent' onClick={() => goTo('/')}>
        <LogoCrowDev />
      </ActionIcon>
      <Input
        placeholder='SocialPet, GetYourTrack, MC And Cheese....'
        radius='lg'
        w='30%'
        size='md'
        rightSection={<MagnifyingGlass />}
      />
      <Group>
        <Button variant='white' onClick={() => goTo('/login')}>
          Login
        </Button>
        <Button onClick={() => goTo('/register')}>Register</Button>
      </Group>
    </Group>
  )
}
