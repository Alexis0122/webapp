import React, { FC } from 'react'
import { Card, Image, Text, Stack, Progress } from '@mantine/core'
import './ProjectCard.css'

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
    <div className='card-background'>
      <Card withBorder>
        <Card.Section className='card-section'>
          <Image className='card-image' src={imageUrl} alt={title} />
          <button className='card-button' onClick={buttonURL}>
            Ver Campaña
          </button>
        </Card.Section>
        <Stack gap='xs' mt='sm'>
          <Text className='card-title'>{title}</Text>
          <Text className='card-initiating'>INICIA DESDE RD$100</Text>
          <Text className='card-amountCollected'>${amountCollected}</Text>
          <Progress style={{ backgroundColor: 'black' }} value={amountCollectedValue} />
          <Text className='card-subtitle'>
            {financialTarget} raised | {donationPercentage} donated
          </Text>
        </Stack>
      </Card>
    </div>
  )
}
