import { Grid, Title, Text, Button, Stack, Tabs, Group } from '@mantine/core'
import React from 'react'
import styles from './CampaignLanding.module.css'
import { Star } from '@phosphor-icons/react'
import Link from 'next/link'

export const CampaignLanding = () => {
  return (
    <Stack align='center'>
      <Group justify='center'>
        <Tabs defaultValue='Home' variant='pills' radius='md'>
          <Tabs.List>
            <Link href='./'>
              <Tabs.Tab leftSection={<Star size={12} />} value='Home'>
                Home
              </Tabs.Tab>
            </Link>
            <Link href='./search'>
              <Tabs.Tab leftSection={<Star size={12} />} value='Crowdfunding'>
                Crowdfunding
              </Tabs.Tab>
            </Link>
            <Tabs.Tab leftSection={<Star size={12} />} value='About'>
              About
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
      <Grid p='lg' grow>
        <Grid.Col span={{ xs: 8, sm: 6, md: 4 }}>
          <Title>PEDRO E UN MMG (Aqui va la foto)</Title>
        </Grid.Col>
        <Grid.Col span={{ xs: 8, sm: 6, md: 6 }}>
          <Stack m='md' className={styles.content}>
            <Group>
              <Title size={56} c='primary'>
                You{' '}
              </Title>
              <Title size={56}>Dream It</Title>
            </Group>
            <Title size={56}>They Bring It To Live</Title>
            <Text fz={16} ta='right'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in tellus non
              scelerisque. Suspendisse ac dolor rhoncus, ornare purus nec, molestie risus.
              Pellentesque vitae dui at enim congue ultricies. Nullam in orci quis mauris
              scelerisque volutpat sit amet vel sapien. Phasellus facilisis neque vitae aliquet
              ornare. In vel dapibus neque, sit amet lacinia sapien. Praesent elementum eros dolor.
              Vivamus sed mauris odio. Vivamus eu tortor neque. In ut aliquet diam.
            </Text>
            <Link href='./createProject'>
              <Button size='xl'>Start A Campaign</Button>
            </Link>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
