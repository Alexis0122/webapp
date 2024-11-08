import { Title, Text, Image } from "@mantine/core";
import React, { FC } from "react";

interface DescriptionProps {
  title: String
  image: String
  text: String
}

export const Description: FC<DescriptionProps> = ({ title, image, text }) => {
  return(
    <>
      <Image
        radius="md"
        src={image}
      />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Image
        radius="md"
        src={image}
      />
    </>
  )
}