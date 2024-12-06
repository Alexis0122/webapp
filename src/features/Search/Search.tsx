import React from 'react'
import { ProjectList } from './components'
import { Box, Group, Tabs } from '@mantine/core'
import { Star } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'

export const SearchProject = () => {
  const { goTo } = useNavigation()
  return (
    <Box mt='md'>
      <Group justify='center'>
        <Tabs defaultValue='Crowdfunding' variant='pills' radius='md'>
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
      <ProjectList />
    </Box>
  )
}
