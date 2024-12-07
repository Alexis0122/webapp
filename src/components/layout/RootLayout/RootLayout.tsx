import { Box, Paper, Stack } from '@mantine/core'
import React, { FC, PropsWithChildren } from 'react'
import classes from './RootLayout.module.css'
import { Navbar } from './Components'
import { useAuth } from '@/hooks/useAuth'
import bgPatternALeft from '@/assets/svg/imgBgHexagonPatternALeft.svg';
import bgPatternARight from '@/assets/svg/imgBgHexagonPatternARight.svg';
import bgPatternBLeft from '@/assets/svg/imgBgHexagonPatternBLeft.svg';
import bgPatternBRight from '@/assets/svg/imgBgHexagonPatternBRight.svg';
import './style.css'
import { GoUpButton } from '@/components/common/GoUpButton';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isMounted } = useAuth()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    const patterns = document.querySelectorAll('.pattern')
    
    patterns.forEach((pattern) => {
      const element = pattern as HTMLElement
      const parallax_x_speed = 0.025;
      if (element.classList.contains('pattern-a-left') || element.classList.contains('pattern-a-right')) {
        element.style.transform = `translateY(${scrollTop * parallax_x_speed}px)`
      } else {
        element.style.transform = `translateY(-${scrollTop * parallax_x_speed}px)`
      }
    })
  }

  return (
    <>
      <div className="background-patterns">
        <img src={bgPatternALeft} className="pattern pattern-a-left" alt="" />
        <img src={bgPatternARight} className="pattern pattern-a-right" alt="" />
        <img src={bgPatternBLeft} className="pattern pattern-b-left" alt="" />
        <img src={bgPatternBRight} className="pattern pattern-b-right" alt="" />
      </div>
      <Navbar />
      <Paper className={classes.paper}>
        <Stack className={classes.content} onScroll={handleScroll}>
          {children}
        </Stack>
      </Paper>
      <GoUpButton />
    </>
  )
}

export default RootLayout
