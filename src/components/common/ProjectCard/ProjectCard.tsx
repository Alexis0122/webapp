import React, { FC } from 'react'
import { Card, Image, Text, Badge, Group, Stack, Progress, Button } from '@mantine/core'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  imageUrl: string
  financialTarget: string
  donationPercentage: string
  amountCollected: string
  amountCollectedValue: number
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageUrl,
  financialTarget,
  donationPercentage,
  amountCollected,
  amountCollectedValue
}) => {
  return (
    <Card shadow='sm' radius='md' withBorder className={styles.card}>
      <Card.Section>
        <Image src={imageUrl} alt={title} height={250} />
      </Card.Section>
      <Stack gap='md' className={styles.cardContent}>
        <Text fw={700} size='md'>
          {title}
        </Text>
        <Text size='xs' color='black'>
          INITIATING AT $100
        </Text>
        <Text size='md' color='black'>
          ${amountCollected}
        </Text>
        <Progress value={amountCollectedValue} />
        <Text size='xs' color='gray'>
          {financialTarget} raised | {donationPercentage} donated
        </Text>
      </Stack>
      <Button
        variant="filled"
        color="primary"
        className={styles.cardButton}
        fullWidth
      >
        NINO MMG
      </Button>
    </Card>
  )
}
