import React, { FC } from 'react'
import {
  PerkSection,
  TimeLine,
  ImagesCarousel,
  CampaignInfo,
  Description
} from '@/components/common'
import { Group } from '@mantine/core'
import './ProjectDetails.modules.css'

interface ProjectDetailsProps {
  images: { url: string }[]
  campaignInfo: {
    campaingState: string
    titleCampaing: string
    usernameCampaing: string
    descriptionCampaing: string
    aboutUsercampaing: string
    price: number
    priceDescription: string
    informacionSupport: string
    userImageUrl: string
  }
  timelineInfo: {
    titleTimeline: string
    descriptionTimeline: string
    activeBar: number
  }
  perkSections: {
    title: string
    text: string
    image: string
    number: number
    category: string
  }[]
  description: {
    title: string
    image: string
    text: string
  }
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  images,
  campaignInfo,
  timelineInfo,
  perkSections,
  description
}) => {
  return (
    <Group className='project-details-container'>
      <div className='carousel-and-info'>
        <ImagesCarousel images={images} />
        <CampaignInfo
          campaingState={campaignInfo.campaingState}
          titleCampaing={campaignInfo.titleCampaing}
          usernameCampaing={campaignInfo.usernameCampaing}
          descriptionCampaing={campaignInfo.descriptionCampaing}
          aboutUsercampaing={campaignInfo.aboutUsercampaing}
          price={campaignInfo.price}
          priceDescription={campaignInfo.priceDescription}
          informacionSupport={campaignInfo.informacionSupport}
          userImageUrl={campaignInfo.userImageUrl}
        />
      </div>
      <div className='timeline-and-perk'>
        <TimeLine
          titleTimeline={timelineInfo.titleTimeline}
          descriptionTimeline={timelineInfo.descriptionTimeline}
          activeBar={timelineInfo.activeBar}
        />
        <div className='perk-section'>
          {perkSections.map((perk, index) => (
            <PerkSection
              key={index}
              title={perk.title}
              text={perk.text}
              image={perk.image}
              number={perk.number}
              category={perk.category}
            />
          ))}
        </div>
        <Description title={description.title} image={description.image} text={description.text} />
      </div>
      {/* Aqui va el Componente de los Comentarios cuando esté ready */}
    </Group>
  )
}

export default ProjectDetails
