import React, { FC } from 'react'
import { Card, Image, Text, Stack, Progress, Button } from '@mantine/core'
import './ProjectCard.css'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  imageUrl: string
  financialTarget: string
  donationPercentage: string
  amountCollected: string
  amountCollectedValue: number
  buttonURL: () => void
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageUrl,
  financialTarget,
  donationPercentage,
  amountCollected,
  amountCollectedValue,
  buttonURL
}) => {
  return (
    <Card shadow='sm' radius='md' withBorder className={styles.card}>
      <Card.Section>
        <Image src={imageUrl} alt={title} height={250} />
      </Card.Section>
      <Stack gap='md' className={styles.cardContent}>
        <Text className={styles.cardTitle} title={title}>
          {title}
        </Text>
        <Text size='xs' color='black' className={styles.cardText}>
          INITIATING AT $100
        </Text>
        <Text size='md' color='black' className={styles.cardText}>
          ${amountCollected}
        </Text>
        <Progress value={amountCollectedValue} className={styles.cardProgress} />
        <Text size='xs' color='gray' className={styles.cardDescription}>
          {financialTarget} raised | {donationPercentage} donated
        </Text>
      </Stack>
      <Button variant='filled' color='primary' className={styles.cardButton} fullWidth onClick={buttonURL}>
        APOYAR
      </Button>
    </Card>
  )
}
