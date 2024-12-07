import useNavigation from '@/hooks/useNavigation'
import { Button, Center, Container, Loader, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'

export default function AuthPage() {
  const [timeLeft, setTimeLeft] = useState(20)
  const { goTo } = useNavigation()

  useEffect(() => {
    if (timeLeft === 0) {
      goTo('/login')
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, goTo])

  return (
    <>
      <Center style={{ height: '100vh' }}>
        <Container size={420} p={30} style={{ textAlign: 'center' }}>
          <Text size='lg' fw={700} mb={15}>
            Confirm Your Account
          </Text>
          <Text size='sm' color='dimmed' mb={25}>
            Please wait while we verify your email. You will be redirected shortly.
          </Text>
          <Loader color='primary.5' size='md' variant='dots' mb={20} />
          <Text size='sm' fw={500}>
            Redirecting in{' '}
            <Text component='span' color='primary.5'>
              {timeLeft}
            </Text>{' '}
            seconds...
          </Text>
          <Button
            variant='light'
            color='primary.5'
            fullWidth
            mt={20}
            onClick={() => goTo('/login')}
          >
            Go Now
          </Button>
        </Container>
      </Center>
    </>
  )
}
