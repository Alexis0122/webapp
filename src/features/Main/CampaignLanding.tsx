import { Text } from '@mantine/core'
import React from 'react'
import { CampaignCard } from '@/features/Main/components'
import CampagneCardTest from '../../components/common/CampagneCard_TEST';
        
export const CampaignLanding = () => {
  return (
    <>
      <CampagneCardTest/>
      <CampaignCard />
    </>
  )
}
