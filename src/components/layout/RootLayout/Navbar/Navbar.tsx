import React, { FC } from "react";
import { ActionIcon, Button, Group, Input, Tabs } from "@mantine/core";
import { LogoCrowDev } from "@/components/icons";
import { MagnifyingGlass, Star } from '@phosphor-icons/react';
import Link from "next/link";

//TODO: Props for actions buttons

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
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
        <Link href="/login">
          <Button variant="white" >Login</Button>
        </Link>
        <Link href='/register'>
          <Button>Register</Button>
        </Link>
      </Group>
      </Group>
      <Group justify="center" >
        <Tabs defaultValue="Home" variant='pills' radius="md">
          <Tabs.List>
            <Link href='./'>
              <Tabs.Tab leftSection={<Star size={12} />} value="Home">Home</Tabs.Tab>
            </Link>
            <Link href='./Search'>
              <Tabs.Tab leftSection={<Star size={12} />} value="Crowdfunding">Crowdfunding</Tabs.Tab>
            </Link>
            <Tabs.Tab leftSection={<Star size={12} />} value="About">About</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
    </>
  )
}