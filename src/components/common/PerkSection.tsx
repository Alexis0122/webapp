import React, { FC } from "react";
import { Badge, Card, Group, Image, List, NumberFormatter, Stack, Text } from "@mantine/core";

interface PerkSectionProps {
  title: String
  text: String
  image: String
  number: number
  category: String
}

export const PerkSection: FC<PerkSectionProps> = ({ title, text, image, number, category}) => {

  const CardPerk = () => {
    return(
      <Card  bg='primary.8'>
        <Card.Section>
          <Image h='90' w='180' src={image}/>
        </Card.Section>
        <Stack gap="xs" >
          <Badge mt='md'>{category}</Badge>
          <Text fz={20} c='white'>{title}</Text>
          <Text fz={20} c='white' >${number}</Text>
          <Text fz={12} c='white' >{text}</Text>
        </Stack>
      </Card>
    )
  }

  return(
    <>
      <Stack align="center" justify="center">
        {CardPerk()}
      </Stack>
    </>
  )
}