import React, { FC } from 'react'
import { Card, Image, Text, Stack, Progress } from '@mantine/core'
import './ProjectCard.css'

// Definición del tipo de propiedades
interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  financialTarget: string
  donationPercentage: string
  amountCollected: string
  amountCollectedValue: number
  buttonURL: () => void
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  financialTarget,
  donationPercentage,
  amountCollected,
  amountCollectedValue,
  buttonURL
}) => {
  // Imprime las propiedades en la consola

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
          <Text>{description}</Text>
        </Stack>
      </Card>
    </div>
  )
}
