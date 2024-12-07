import React from 'react'
import { ActionIcon, Button, Group, Input, Menu, rem, Space } from '@mantine/core'
import { LogoCrowDev } from '@/components/icons'
import { Gear, MagnifyingGlass } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'
import { useAuth } from '@/hooks/useAuth'
import './styles.css'
import { UserButton } from './UserButton'

export const Navbar = () => {
  const { goTo } = useNavigation()
  const { logout, token, isMounted, img, email, user, id } = useAuth()

  return (
    <Group h='100%' justify='space-between' p='sm' bg='tertiary.2' className='navbar'>
      {/* Logo */}
      <ActionIcon size='xl' variant='transparent' onClick={() => goTo('/')}>
        <LogoCrowDev />
      </ActionIcon>
      <Space w={{ xs: 'xs', md: 'md' }} />
      {/* Botones dinámicos */}
      <Group>
        {isMounted ? (
          token ? (
            // Si el usuario está autenticado, muestra el botón de logout
            <Menu>
              <Menu.Target>
                <UserButton image={`${img}`} name={`${user}`} email={`${email}`} />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item onClick={() => goTo(`/Perfil/Proyectos/${id}`)}>Tus Proyectos</Menu.Item>
                <Menu.Item onClick={() => goTo('')}>Cambia la tu imagen de perfil</Menu.Item>
                <Menu.Label>Danger Zone</Menu.Label>
                <Menu.Item
                  onClick={logout}
                  leftSection={<Gear style={{ width: rem(14), height: rem(14) }} />}
                >
                  LogOut
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
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
