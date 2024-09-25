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
      '#E0F4EB',
      '#B3E6D2',
      '#82D7B6',
      '#52C999',
      '#2CBF81',
      '#0FB26A',
      '#065242',
      '#04804A',
      '#01683E',
      '#004F30'
    ],
    dark: [
      '#ECE7F0',
      '#D1C7DA',
      '#B3A6C3',
      '#9685AD',
      '#7C6396',
      '#614C7E',
      '#493963',
      '#34284B',
      '#211932',
      '#11091A'
    ],
    aqua: [
      '#E0F2F1',
      '#B2DFDB',
      '#80CBC4',
      '#4DB6AC',
      '#26A69A',
      '#009688',
      '#00897B',
      '#00796B',
      '#00695C',
      '#004D40'
    ],
    gold: [
      "#fffbe1",
      "#fff5cc",
      "#ffea9b",
      "#ffdf64",
      "#ffd538",
      "#ffcf1c",
      "#ffcc09",
      "#e3b400",
      "#c9a000",
      "#ae8900"
    ],
    salmon: [
      '#FFE0DC',
      '#FFB3AB',
      '#FF8076',
      '#FF4C41',
      '#FF271D',
      '#FF0000',
      '#CC0000',
      '#990000',
      '#660000',
      '#330000'
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