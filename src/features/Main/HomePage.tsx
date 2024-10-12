import { Stack } from '@mantine/core'
import React from 'react'
import { CampaignCarousel, CampagneCard, CampaignLanding } from '@/features/Main/components'

export const HomePage = () => {
  return (
    <Stack>
      <CampaignLanding />
      <CampagneCard />
      <CampaignCarousel />
    </Stack>
  )
}
