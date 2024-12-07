import { Group, Stack, Tabs } from '@mantine/core'
import React from 'react'
import { CampaignCarousel, CampagneCard, CampaignLanding } from '@/features/Main/components'
import { House, ChartLine, Info } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'
import { Footer } from '../Footer'


export const HomePage = () => {
  const { goTo } = useNavigation()

  return (
    <Stack gap='xl'>
      <Group justify='center'>
        <Tabs defaultValue='Home' variant='pills' radius='md'>
          <Tabs.List>
            <Tabs.Tab leftSection={<House size={16} />} value='Home' onClick={() => goTo('/')}>
              Home
            </Tabs.Tab>
            <Tabs.Tab
              leftSection={<ChartLine size={16} />}
              value='Crowdfunding'
              onClick={() => goTo('/Search/AllProjects')}
            >
              Crowdfunding
            </Tabs.Tab>
            <Tabs.Tab leftSection={<Info size={16} />} value='About' onClick={() => goTo('/About')}>
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
