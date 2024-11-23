import { Paper, Stack } from '@mantine/core'
import React, { FC, PropsWithChildren } from 'react'
import classes from './RootLayout.module.css'
import { Navbar } from './Navbar'
import { useAuth } from '@/hooks/useAuth' // Importa useAuth

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isMounted } = useAuth()

  if (!isMounted) return null

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Paper className={classes.paper}>
        <Stack className={classes.content}>{children}</Stack>
      </Paper>
    </>
  )
}

export default RootLayout
