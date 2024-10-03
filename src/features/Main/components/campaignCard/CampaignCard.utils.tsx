// CampaignCard.tsx
import React from 'react'
import { Card, Text, Button, Group, Divider } from '@mantine/core'
import styles from './CampaignCard.module.css'

interface CampaignCardItemProps {
  title: string
  subtitle: string
  buttonText: string
  fees: string
  letter?: string
  isActive?: boolean // New prop to indicate if it is the active card
}

export const CampaignCardItem: React.FC<CampaignCardItemProps> = ({
  title,
  subtitle,
  buttonText,
  fees,
  letter,
  isActive = false // Default value is false
}) => {
  return (
    <div>
      <Card shadow='md' radius='md' className={styles.card}>
        {letter && (
          <Text w={700} size='xs' fw='700' className={styles.leftText}>
            {letter}. {subtitle}
          </Text>
        )}
        <Text 
          mt='20px' 
          w={700} 
          fw='700' 
          className={`${styles.centeredTitle} ${isActive ? styles.activeTitle : ''}`} // Conditional class
        >
          {title}
        </Text>
        <Group justify='center' pb='8px' className={styles.group}>
          <Button
            variant='filled'
            fullWidth
            className={styles.button}
          >
            {buttonText}
          </Button>
        </Group>

        <div style={{ width: '100%' }}>
          <Divider
            orientation='horizontal'
            color='black'
            pb='15px'
            style={{ borderColor: 'black', borderWidth: '0.7px' }}
            labelPosition='center'
          />
        </div>
        <Text className={styles.feesText} size='xs'>
          {fees}
        </Text>
      </Card>
    </div>
  )
}
