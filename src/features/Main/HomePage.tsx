import { Group, Stack, Tabs } from '@mantine/core'
import React from 'react'
import { CampaignCarousel, CampagneCard, CampaignLanding } from '@/features/Main/components'
import { Star } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'
import { Footer } from '../Footer'


export const HomePage = () => {
  const { goTo } = useNavigation()

  return (
    <Stack gap='xl'>
      <Group justify='center'>
        <Tabs defaultValue='Home' variant='pills' radius='md'>
          <Tabs.List>
            <Tabs.Tab leftSection={<Star size={12} />} value='Home' onClick={() => goTo('/')}>
              Home
            </Tabs.Tab>
            <Tabs.Tab
              leftSection={<Star size={12} />}
              value='Crowdfunding'
              onClick={() => goTo('/Search/AllProjects')}
            >
              Crowdfunding
            </Tabs.Tab>
            <Tabs.Tab leftSection={<Star size={12} />} value='About' onClick={() => goTo('/about')}>
              About
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
      <CampaignLanding />
      {/* <CampagneCard /> */}
      <CampaignCarousel />

      <Footer />
    </Stack>
  )
}
