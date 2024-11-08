import { Stack } from '@mantine/core'
import React from 'react'
import { CampaignCarousel, CampagneCard, CampaignLanding } from '@/features/Main/components'

export const HomePage = () => {
  return (
    <Stack gap="xl">
      <CampaignLanding />
      {/* <CampagneCard /> */}
      <CampaignCarousel />
    </Stack>
  )
}
