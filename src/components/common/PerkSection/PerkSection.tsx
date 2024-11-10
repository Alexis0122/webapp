import React, { FC } from "react";
import { Badge, Card, Image, ScrollArea, Stack, Text } from "@mantine/core";
import styles from './PerkSection.module.css'

interface PerkSectionProps {
  title: String
  text: String
  image: String
  number: number
  category: String
}

export const PerkSection: FC<PerkSectionProps> = ({ title, text, image, number, category}) => {
  return(
    <Card bg='primary.8' className={styles.card}>
      <Card.Section>
        <Image h='90' w='180' src={image}/>
      </Card.Section>
      <Stack gap="xs" >
        <Badge mt='md'>{category}</Badge>
        <Text fz={20} c='white'>{title}</Text>
        <Text fz={20} c='white' >${number}</Text>
        <ScrollArea h={370}>
          <Text fz={12} c='white' >{text}</Text>
        </ScrollArea>
      </Stack>
    </Card>
  )
}
