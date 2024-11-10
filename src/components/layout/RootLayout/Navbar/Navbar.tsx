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
        <Link href='./'>
          <ActionIcon size='xl' variant="transparent">
            <LogoCrowDev />
          </ActionIcon>
        </Link>
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
    </>
  )
}