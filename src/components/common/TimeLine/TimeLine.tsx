import { Timeline, Text, Title, Button, Space } from '@mantine/core'
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
  activeBar: number
  descriptionTimeline: string
}

export const TimeLine: FC<TimeLineProps> = ({
  activeBar,
  titleTimeline,
  descriptionTimeline
}) => {
  return (
    <div className='timeline-container'>
      <div className='timeline-title'>
        <Title order={1} className='timeline-textTitle'>
          {titleTimeline}
        </Title>
        <Text className='timeline-description'>{descriptionTimeline}</Text>
        <Title order={2} className='timeline-textTitle'>
         Learn More
        </Title>
      </div>

      <div>
        <Timeline radius='xl' bulletSize={40} active={activeBar} lineWidth={6}>
          <Timeline.Item
            title='Concept'
            className='timeline-textSubtitle'
            bullet={<Lightbulb size={40} weight='bold' />}
            radius='xl'
          >
            <Space h="md" />
          </Timeline.Item>

          <Timeline.Item
            title='Prototype'
            className='timeline-textSubtitle'
            bullet={<Robot size={40} weight='bold' />}
            radius='xl'
          >
            <Space h="md" />
          </Timeline.Item>

          <Timeline.Item
            title='Production'
            className='timeline-textSubtitle'
            bullet={<Factory size={40} weight='bold' />}
            radius='xl'
          >
            <Space h="md" />
          </Timeline.Item>

          <Timeline.Item
            title='Shipping'
            className='timeline-textSubtitle'
            bullet={<Truck size={40} weight='bold' />}
            radius='xl'
          >
            <Space h="md" />
          </Timeline.Item>

          <Timeline.Item
            title='Delivered'
            className='timeline-textSubtitle'
            bullet={<Storefront size={40} weight='bold' />}
            radius='xl'
          >
            <Space h="md" />
          </Timeline.Item>

          <Timeline.Item
            title='Ended?'
            className='timeline-textSubtitle'
            bullet={<CheckFat size={40} weight='bold' />}
            radius='xl'
          >
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

export default TimeLine
