import { Card, Image, Text, Badge, Button, Group, Avatar } from '@mantine/core'
import { ShareNetwork, BookmarkSimple } from '@phosphor-icons/react'
import React, { FC } from 'react'
import './CampaignInfo.css'

interface CampaignInfoprops {
  titleCampaing: string
  descriptionCampaing: string
  usernameCampaing: string
  aboutUsercampaing: string
  price: number
  informacionSupport: string
  userImageUrl: string
  stateCampaing: string
}

export const CampaignInfo: FC<CampaignInfoprops> = ({
  titleCampaing,
  descriptionCampaing,
  usernameCampaing,
  aboutUsercampaing,
  price,
  informacionSupport,
  userImageUrl,
  stateCampaing
}) => {
  return (
    <div className='campaigninfo-backgroud'>
      <Text className='campainginfo-indemand '>{stateCampaing}</Text>
      <Group justify='space-between' mt='md'>
        <Text className='campainginfo-title'>{titleCampaing}</Text>
      </Group>
      <Text className='campainginfo-description'>{descriptionCampaing}</Text>

      <Group justify='flex-start' align='flex-start'>
        <Avatar src={userImageUrl} alt='User image' className='campaigninfo-userimage' />
        <div>
          <Text className='campaigninfo-username'>{usernameCampaing}</Text>
          <Text className='campaigninfo-aboutusername'>{aboutUsercampaing}</Text>
        </div>
      </Group>
      <Group justify='flex-start' align='flex-start'>
        <Text className='campaigninfo-price'>${price}</Text>
        <Text className='campaigninfo-stateCampaing'>{stateCampaing}</Text>
      </Group>

      <Text className='campaigninfo-supportinfo'>{informacionSupport}</Text>

      <Group justify='center' align='center'>
        <Button className='campaigninfo-bigbutton'>PICK YOUR PERK</Button>
      </Group>

      <Group justify='center' align='center'>
        <Button
          leftSection={<BookmarkSimple size={20} color='#ffffff' weight='fill' />}
          className='campaigninfo-saveforlater'
        >
          SAVE FOR LATER
        </Button>
        <Button
          leftSection={<ShareNetwork size={20} weight='bold' />}
          className='campaigninfo-share'
        >
          SHARE
        </Button>
      </Group>
    </div>
  )
}

export default CampaignInfo
