import {
  Card,
  CloseButton,
  Group,
  Image,
  Title,
  Text,
  Stack,
  Badge,
  ScrollArea
} from '@mantine/core'
import { X } from '@phosphor-icons/react'
import React, { FC } from 'react'
import styles from './Gratification.module.css'

interface GratificationProps {
  title: string
  onClose: () => void
  image: string
  category: string
  price: number
  description: string
}

export const Gratification: FC<GratificationProps> = ({
  title,
  image,
  onClose,
  category,
  price,
  description
}) => {
  return (
    <Card className={styles.cardG} bg='primary.7' withBorder shadow='sm' radius='md'>
      <Card.Section>
        <Group p='md' justify='flex-end'>
          <CloseButton
            onClick={onClose}
            variant='transparent'
            icon={<X size={20} color='white' />}
          />
        </Group>
        <Image h='90' w='180' src={image} />
      </Card.Section>
      <Stack gap='xs'>
        <Badge mt='md' color='primary.9'>
          {category}
        </Badge>
        <Title order={4} c='white'>
          {title}
        </Title>
        <Text c='white' fz={20}>
          ${price}
        </Text>
        <ScrollArea h={160}>
          <Text c='white' fz={12}>
            {description}
          </Text>
        </ScrollArea>
      </Stack>
    </Card>
  )
}
