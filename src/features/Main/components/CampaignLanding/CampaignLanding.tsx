import React from 'react'
import { Grid, Title, Text, Button, Stack } from '@mantine/core'
import Image from 'next/image'
import useNavigation from '@/hooks/useNavigation'
import { useAuth } from '@/hooks/useAuth'
import styles from './CampaignLanding.module.css'
import imgLandingPageBombillo from '@/assets/png/imgLandingPageBombillo.png'

export const CampaignLanding = () => {
  const { isAuthenticated } = useAuth()
  const { goTo } = useNavigation()

  const handleStartCampaign = () => {
    if (isAuthenticated) {
      goTo('/createProject')
    } else {
      goTo('/login')
    }
  }

  return (
    <Stack align='center' style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0' }}>
      <Grid p='lg' grow>
        <Grid.Col 
          span={{ xs: 8, sm: 6, md: 4 }} 
          style={{ 
            position: 'relative', 
            minHeight: '600px',
            filter: 'drop-shadow(0 40px 2px rgba(192, 14, 56, 0.6))',
            marginTop: '-40px'
          }}
          className={styles.imageContainer}
        >
          <Image
            src={imgLandingPageBombillo}
            alt="Landing Page Illustration"
            fill
            style={{ 
              objectFit: 'contain',
            }}
            className={styles.rotatingImage}
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 8, sm: 6, md: 6 }}>
          <Stack m='md' className={styles.content}>
            <div className={styles.titleGroup}>
              <Title className={styles.titlePrimary} c='primary'>
                You
              </Title>
              <Title className={styles.titleSecondary}>
                Dream It
              </Title>
            </div>
            <Title className={styles.titleTertiary} mb={16}>
              They Bring It To Life
            </Title>
            <Text className={styles.description}>
              Turn your vision into reality with a community-driven platform that connects dreamers and doers.
              Whether you have a groundbreaking idea or the skills to bring one to life, this is the space
              where collaboration thrives. Share your projects, find support from a network of passionate
              creators, and access the tools you need to succeed. Together, we'll make your dreams a reality.
            </Text>
            <Button 
              size='xl' 
              onClick={handleStartCampaign}
              className={styles.button}
            >
              Start A Campaign
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
