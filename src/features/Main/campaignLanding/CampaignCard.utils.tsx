// CampaignCardItem.tsx
import React from 'react'
import { Card, Text, Button, Group } from '@mantine/core'
import styles from './CampaignCard.module.css' // Import the CSS module

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

const CampaignCardItem: React.FC<CampaignCardItemProps> = ({
  title,
  subtitle,
  buttonText,
  fees,
  letter,
  marginB = 300,
  marginT = 0,
  sizeT = '25px',
  width = '400px', // Default width
  height = '468px',
  paddingL = '170px'
}) => {
  return (
    <Card
      shadow='md'
      padding='lg'
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
      <Group justify='center' className={styles.group}>
        <Button
          variant='filled'
          fullWidth
          className={styles.button} // Use button class
          size='xl'
          style={{ marginTop: marginT }} // Use centeredTitle class
        >
          {buttonText}
        </Button>
      </Group>
      <Text className={styles.feesText} size='xs'>
        {fees}
      </Text>
    </Card>
  )
}

export default CampaignCardItem
