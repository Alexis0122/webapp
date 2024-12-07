import React from 'react'
import { Group, Stack, Tabs, Title, Text } from '@mantine/core'
import { House, ChartLine, Info } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'
import { ProjectList } from './components'
import styles from './Search.module.css'
import { Footer } from '../Footer'

export const SearchProject = () => {
  const { goTo } = useNavigation()

  return (
    <>
      <Group justify='center' mt={16}>
        <Tabs defaultValue='Crowdfunding' variant='pills' radius='md'>
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

    <Stack className={styles.container}>
      <div className={styles.headerContent}>
        <Title className={styles.title}>
          Choose the Next Big Project
        </Title>
        <Text className={styles.description}>
          This is where ideas that shape the future are born. Join as a collaborator or sponsor!
        </Text>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectList className={styles.projectList} />
      </div>
    </Stack>

    <Footer />
    </>
  )
}
