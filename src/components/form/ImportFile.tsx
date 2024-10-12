import React, { type FC, type ReactNode } from 'react'
import { Dropzone, type DropzoneProps, IMAGE_MIME_TYPE, PDF_MIME_TYPE } from '@mantine/dropzone'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react'
import { rem, Stack, Text } from '@mantine/core'

export interface ImportFileProps extends Pick<DropzoneProps, 'onDrop'> {
  content?: ReactNode
  dropzoneProps?: Partial<DropzoneProps>
}
// todo: Improve design
//todo: handle errors
export const ImportFile: FC<ImportFileProps> = ({ onDrop, content, dropzoneProps }) => {
  return (
    <Dropzone
      onDrop={onDrop}
      maxSize={5 * 1024 ** 2}
      accept={[...IMAGE_MIME_TYPE, ...PDF_MIME_TYPE]}
      {...dropzoneProps}
    >
      <Stack align='center' justify={'center'} gap='xl' mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div>
          {content || (
            <>
              <Text size='xl' inline>
                Arrastre sus archivos o haga click para seleccionarlos
              </Text>
              <Text size='sm' c='dimmed' inline mt={7}>
                Puede importar tantos archivos como desee, cada archivo debe ser menor a 5 MB
              </Text>
            </>
          )}
        </div>
      </Stack>
    </Dropzone>
  )
}
