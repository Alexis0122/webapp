// CampaignCard.tsx
import React from 'react'
import { Grid, Container } from '@mantine/core'
import { CampaignCardItem } from './CampaignCard.utils'

export const CampaignCard = () => {
  return (
    <Container size='320vh' style={{ minHeight: '120vh' }}>
      <Grid gutter='lg'>
        <Grid.Col span={4} style={{ padding: '40px 0px 0px 25px' }}>
          <CampaignCardItem
            title='Pre-Launch'
            subtitle='Build Anticipation'
            buttonText='Starts Now'
            fees='Fees Free; 5% of funds raised from reservations'
            letter={'A'}
            
          />
        </Grid.Col>
        <Grid.Col span={4} style={{ padding: '10px 15px 0px 0px' }}>
          <CampaignCardItem
            title='Crowdfunding'
            subtitle='Raise Funds'
            buttonText='Start Your Campaign'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter={'B'}
            sizeT={'40px'}
            marginB={10}
            marginT={310}
            width='443px' // Set a custom width for the middle card
            height='529px'
            paddingL='150px'
          />
        </Grid.Col>
        <Grid.Col span={4} style={{ padding: '40px 25px 0px 20px' }}>
          <CampaignCardItem
            title='Pre-Launch'
            subtitle='Learn More'
            buttonText='Learn More'
            fees='Fees 5%-8%; 4-5% of funds raised + transaction fees'
            letter={'C'}
            
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
