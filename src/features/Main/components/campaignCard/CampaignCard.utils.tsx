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
}

export const CampaignCardItem: React.FC<CampaignCardItemProps> = ({
  title,
  subtitle,
  buttonText,
  fees,
  letter,
}) => {
  return (
    <Container>
      <Card shadow="md" radius="md" className={styles.card}>
        {letter && (
          <Text w={700} size="xs" fw="700" className={styles.leftText}>
            {letter}. {subtitle}
          </Text>
        )}
        <Text w={700} size="35px" fw="700" className={styles.centeredTitle}>
          {title}
        </Text>
        <Group justify="center" pb="8px" className={styles.group}>
          <Button variant="filled" fullWidth className={styles.button}>
            {buttonText}
          </Button>
        </Group>
        <Divider orientation="horizontal" className={styles.customDivider} labelPosition="center" />
        <Text className={styles.feesText} size="xs">
          {fees}
        </Text>
      </Card>
    </Container>
  );
};
