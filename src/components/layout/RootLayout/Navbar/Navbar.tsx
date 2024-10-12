import React, { FC } from "react";
import { ActionIcon, Button, Group, Input } from "@mantine/core";
import { LogoCrowDev } from "@/components/icons";
import { MagnifyingGlass } from '@phosphor-icons/react';

//TODO: Props for actions buttons

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <Group
      h="100%"
      justify='space-between'
      p='sm'
      bg='tertiary.2'
    >
      <ActionIcon size='xl' variant="transparent">
        <LogoCrowDev />
      </ActionIcon>
      <Input
        placeholder="SocialPet, GetYourTrack, MC And Cheese...."
        radius='lg'
        w='30%'
        size="md"
        rightSection={ <MagnifyingGlass/> }
      />
      <Group>
        <Button variant="white">Login</Button>
        <Button>Register</Button>
      </Group>
    </Group>
  )
}