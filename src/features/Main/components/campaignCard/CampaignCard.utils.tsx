// CampaignCardItem.tsx
import React from 'react';
import { Card, Text, Button, Group, Divider, Container } from '@mantine/core';
import styles from './CampaignCard.module.css';

interface CampaignCardItemProps {
  title: string;
  subtitle: string;
  buttonText: string;
  fees: string;
  letter?: string;
  isActive?: boolean; // Nuevo prop para indicar si es el card activo
}

export const CampaignCardItem: React.FC<CampaignCardItemProps> = ({
  title,
  subtitle,
  buttonText,
  fees,
  letter,
  isActive = false, // Valor por defecto es false
}) => {
  return (
    <Container>
      <Card shadow='md' radius='md' className={styles.card}>
        {letter && (
          <Text w={700} size='xs' fw='700' pl='170px' className={styles.leftText}>
            {letter}. {subtitle}
          </Text>
        )}
        <Text mt='20px' w={700} size={isActive ? '50px' : '35px'} fw='700' className={styles.centeredTitle}>
          {title}
        </Text>
        <Group justify='center' pb='8px' className={styles.group}>
          <Button mt={isActive ? '340px' : '280px'} variant='filled' fullWidth className={styles.button}>
            {buttonText}
          </Button>
        </Group>

        <div style={{ width: '100%' }}>
          <Divider
            orientation='horizontal'
            color='black'
            pb='5px'
            style={{ borderColor: 'black', borderWidth: '0.7px' }}
            labelPosition='center'
          />
        </div>
        <Text className={styles.feesText} size='xs'>
          {fees}
        </Text>
      </Card>
    </Container>
  );
};
