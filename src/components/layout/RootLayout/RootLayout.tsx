import { Paper, Stack } from "@mantine/core";
import React, { type FC, type PropsWithChildren} from "react";
import classes from './RootLayout.module.css'
import { Navbar } from "./Navbar";

// TODO: Responsive for mobile

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Paper className={classes.paper}>
        <Stack className={classes.content}>
          {children}
        </Stack>
      </Paper>
    </>
  )
}

export default RootLayout