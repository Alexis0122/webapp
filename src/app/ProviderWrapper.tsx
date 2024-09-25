import React, { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import theme from "@/theme";
import '@mantine/core/styles.css'
// import '@mantine/dates/styles.css'
// import 'mantine-react-table/styles.css'
// import '@mantine/dropzone/styles.css'

export const ProvidersWrapper: FC<PropsWithChildren> = ({ children }) => {
  return(
    <>
    <MantineProvider
      theme={theme}
      withCssVariables
    >
      {children}
    </MantineProvider>
    </>
  )
}