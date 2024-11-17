import { Title, Text, Image, Group  } from '@mantine/core';
import React, { FC } from 'react';
import './Description.modules.css';

interface DescriptionProps {
  title: string;
  image: string;
  text: string;
}

export const Description: FC<DescriptionProps> = ({ title, image, text }) => {
  return (
    <Group className='description-background'>
      <Image className='description-image' radius='md' src={image} />
      <div className='description-content'>
        <Title className='description-title'>{title}</Title>
        <Text className='description-text'>{text}</Text>
      </div>
    </Group>
  );
};
