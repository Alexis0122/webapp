import React, { useState } from 'react'
import { Select } from '@mantine/core'
import { MagnifyingGlass } from '@phosphor-icons/react'
import useNavigation from '@/hooks/useNavigation'

export const SearchInput = () => {
  const { goTo } = useNavigation()

  return (
    <Select
      placeholder='SocialPet, GetYourTrack, MC And Cheese....'
      radius='lg'
      w='50%'
      size='md'
      rightSection={<MagnifyingGlass />}
      searchable
    />
  )
}
