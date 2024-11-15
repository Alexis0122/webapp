import { ActionIcon, Group, Paper, Text } from '@mantine/core'
import { TrashSimple, File } from '@phosphor-icons/react'
import React, { FC } from 'react'
import styles from './FileCard.module.css'

interface FileCardProps {
  fileName: string
  fileSize: number
  onDelete: () => void
}

export const FileCard: FC<FileCardProps> = ({ fileName, fileSize, onDelete }) => {
  return (
    <>
      <Paper className={styles.container}>
        <Paper className={styles.paper}>
          <Group className={styles.group}>
            <Group className={styles.fileInfo}>
              <File size={25} />
              <div>
                <Text>{fileName}</Text>
                <Text size='xs'>{fileSize} KB</Text>
              </div>
            </Group>

            <Group>
              <ActionIcon onClick={() => onDelete()} variant='transparent'>
                <TrashSimple size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>
      </Paper>
    </>
  )
}
