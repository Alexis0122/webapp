import { Card, Image, Text, Badge, Button, Group, Avatar } from '@mantine/core'
import { ShareNetwork, BookmarkSimple } from '@phosphor-icons/react'
import React, { FC } from 'react'
import './CampaignInfo.css'

interface CampaignInfoprops {
  titleCampaing: string
  descriptionCampaing: string
  usernamecampaing: string
  aboutusercampaing: string
  price: number
  informacionsupport: string
  userImageUrl: string
  stateCampaing: string
}

export const CampaignInfo: FC<CampaignInfoprops> = ({
  titleCampaing,
  descriptionCampaing,
  usernamecampaing,
  aboutusercampaing,
  price,
  informacionsupport,
  userImageUrl,
  stateCampaing
}) => {
  return (
    <div className='campaigninfo-backgroud'>
      <Text className='campainginfo-indemand '>{(stateCampaing = 'INDEMAND')}</Text>
      <Group justify='space-between' mt='md'>
        <Text className='campainginfo-title'>{(titleCampaing = 'Georgian Restaurant')}</Text>
      </Group>
      <Text className='campainginfo-description'>
        {
          (descriptionCampaing =
            'Lorem ipsum dolor sit amet | consectetur adipiscing elit | Aenean porta in tellus non scelerisque |')
        }
      </Text>

      <Group justify='flex-start' align='flex-start'>
        <Avatar src={userImageUrl} alt='User image' className='campaigninfo-userimage' />
        <div>
          <Text className='campaigninfo-username'>{(usernamecampaing = 'Muhamed Ali')}</Text>
          <Text className='campaigninfo-aboutusername'>
            {(aboutusercampaing = '1 Campaign | New York, United States')}
          </Text>
        </div>
      </Group>
      <Group justify='flex-start' align='flex-start'>
        <Text className='campaigninfo-price'>${(price = 979.766)}</Text>
        <Text className='campaigninfo-stateCampaing'>
          {(stateCampaing = 'HQD by 721 Supporters')}
        </Text>
      </Group>

      <Text className='campaigninfo-supportinfo'>
        {(informacionsupport = '$745.146 HQD by 612 Supporters on May 15, 2024')}
      </Text>

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
