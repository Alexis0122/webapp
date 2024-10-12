import { createTheme } from "@mantine/core";

const customColors = {
  //this section is for add customs colors
}

const theme = createTheme({

  //Fonts
  fontFamily: 'Inter, sans-serif',

  //Breakpoints
  breakpoints: {
    xs: '360px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1440px'
  },

  defaultRadius: 'md',

  //Colors
  black: '#070707',

  defaultGradient: {},

  colors: {
    primary: [
      '#FFF0F3',
      '#FFCCD5',
      '#FFB3C1',
      '#FF8FA3',
      '#FF758F',
      '#FF4D6D',
      '#C9184A',
      '#A4133C',
      '#800F2F',
      '#590D22'
    ],
    tertiary: [
      '#EEEFF1',
      '#E3E3E3',
      '#B6B8BF',
      '#9DA2AF',
      '#7E8595',
      '#61697C',
      '#464C5A',
      '#393E4A',
      '#21242C',
      '#1a1d23'
    ]
  },
  primaryColor: 'primary',
  other: {
    colors: customColors
  }
})

declare module '@mantine/core' {
  export interface MantineThemeOther {
    colors: typeof customColors
  }
}

export default theme