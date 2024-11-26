import React, { FC, PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import theme from '@/theme'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'

const defaultQueryConfig = { staleTime: 60000, retry: false }

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig }
})

export const ProvidersWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <MantineProvider theme={theme} withCssVariables>
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
