// CampaignCardItem.tsx
import React from 'react'
import { Card, Text, Button, Group, Divider, Box, Container } from '@mantine/core'
import styles from './CampaignCard.module.css' // Import the CSS module
import { IconSearch } from '@tabler/icons-react'

interface CampaignCardItemProps {
  title: string
  subtitle: string
  buttonText: string
  fees: string
  letter?: string // Optional prop
  marginB?: number // Optional prop
  marginT?: number
  sizeT?: string // Font size for title
  width?: string // Custom width prop
  height?: string // Custom height prop
  paddingL?: string
}

export const CampaignCardItem: React.FC<CampaignCardItemProps> = ({
  title,
  subtitle,
  buttonText,
  fees,
  letter,
  marginB = 260,
  marginT = 0,
  sizeT = '35px',
  width = '400px', // Default width
  height = '468px',
  paddingL = '170px'
}) => {
  return (
    <Container className={styles.container}>
    <Card
      shadow='md'
      radius='md'
      className={styles.card} // Use the card class from CSS
      style={{ width, height }} // Set width and height
    >
      {letter && (
        <Text
          w={700}
          size='xs'
          fw='700'
          className={styles.leftText} // Use leftText class
          style={{ marginBottom: marginB, paddingLeft: paddingL }} // Keep marginB as a prop
        >
          {letter}. {subtitle}
        </Text>
      )}
      <Text w={700} size={sizeT} fw='700' className={styles.centeredTitle}>
        {title}
      </Text>
      <Group justify='center' pb= '8px' className={styles.group}>
        <Button
          variant='filled'
          fullWidth
          className={styles.button}
          size='xl'
          style={{ marginTop: marginT }}
        >
          {buttonText}
        </Button>
      </Group>
      <div style={{ width: '100%' }}>
        {' '}

        <Divider
          orientation='horizontal'
          color='black'
          pb= '5px'
          style={{ borderColor: 'black', borderWidth: '0.7px',  }} // Asegurar color y grosor
          labelPosition='center'
                 />
      </div>

      <Text className={styles.feesText} size='xs'>
        {fees}
      </Text>
    </Card>
    </Container>
  )
}
