import { Timeline, Text, Title, Button, Avatar } from '@mantine/core'
import './TimeLine.css'
import {
  Lightbulb,
  Robot,
  Star,
  Truck,
  Storefront,
  Factory,
  CheckFat,
  Fire
} from '@phosphor-icons/react'
import React, { FC } from 'react'

interface TimeLineProps {
  titleTimeline: string
  activebar: number
  desripctionTimeline: string
}

export const HorizontalTimeline: FC<TimeLineProps> = ({
  activebar,
  titleTimeline,
  desripctionTimeline
}) => {
  return (
    <div className='timeline-container'>
      <div className='timeline-title'>
        <Title order={1} className='timeline-texttitle'>
          {(titleTimeline = 'Production')}
        </Title>
        <Text className='timeline-description'>{(desripctionTimeline = 'Una descripción')}</Text>
        <Title order={2} className='timeline-texttitle'>
          {(titleTimeline = 'Learn More')}
        </Title>
      </div>

      <div>
        <Timeline radius='xl' bulletSize={40} active={activebar=2} lineWidth={6}>
          <Timeline.Item
            title='Concept'
            className='timeline-textsubtitle'
            bullet={<Lightbulb size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Production Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in
              tellus non scelerisque.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Prototype'
            className='timeline-textsubtitle'
            bullet={<Robot size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Prototype Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in
              tellus non scelerisque.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Production'
            className='timeline-textsubtitle'
            bullet={<Factory size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Production Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in
              tellus non scelerisque.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Shipping'
            className='timeline-textsubtitle'
            bullet={<Truck size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Production Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in
              tellus non scelerisque.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Delivered'
            className='timeline-textsubtitle'
            bullet={<Storefront size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Production Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in
              tellus non scelerisque.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Ended?'
            className='timeline-textsubtitle'
            bullet={<CheckFat size={40} weight='bold' />}
            radius='xl'
          >
            <Text size='sm'>
              Ended Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta in tellus
              non scelerisque.
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>

      <div className='timeline-actions'>
        <Title className='timeline-highlights' order={3}>
          HighLights
        </Title>
        <div className='timeline-buttons'>
          <Button leftSection={<Star size={25} weight='bold' />} className='timeline-button'>
            PICK YOUR PERK
          </Button>
          <Button leftSection={<Fire size={25} weight='bold' />} className='timeline-button'>
            12 Projects
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalTimeline
