import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { Button, Paper, Title, useMantineTheme, Text, rem } from '@mantine/core'
import classes from './CarouselPerk.module.css'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

// Banco de títulos
const titlesBank = [
  '"This software has transformed our workflow. Highly recommend!"',
  '"Amazing project! The user interface is so intuitive."',
  '"Great job! The features are exactly what we needed."',
  '"Impressive work! The performance improvements are noticeable."',
  '"Fantastic tool! It has made our tasks much easier."',
  '"Excellent project! The support team is very responsive."',
  '"Innovative solution! It has streamlined our processes."',
  '"Highly efficient software. Kudos to the development team!"',
  '"User-friendly and reliable. Great work!"',
  '"Outstanding project! The updates are always on point."',
  '"Very useful software. It has saved us a lot of time."',
  '"Top-notch project! The design is sleek and modern."',
  '"Incredible functionality. It meets all our requirements."',
  '"Well done! The integration was seamless."',
  '"Exceptional software. It has exceeded our expectations."',
  '"Fantastic user experience. It has been a game changer for us."',
  '"Superb project! It has boosted our productivity significantly."',
  '"Wonderful tool! Easy to use and highly effective."',
  '"Impressive! This software solved our biggest challenges."',
  '"Great innovation. It fits perfectly with our needs."',
  '"Exceptional design and functionality. Well done!"',
  '"Amazing software. It has improved our workflow drastically."',
  '"Highly reliable tool. Excellent job!"',
  '"Incredible project! The features are top-notch."',
  '"Outstanding performance and user interface."',
  '"Very intuitive and efficient. Great work!"',
  '"Remarkable tool. It has made a huge difference for us."',
  '"Top-quality software. Highly recommend it!"',
  '"Fantastic support and seamless integration."',
  '"Superb work! It has streamlined our operations."'
]

// Banco de nombres
const namesBank = [
  'Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Edward',
  'Fiona',
  'George',
  'Hannah',
  'Ian',
  'Julia',
  'Kevin',
  'Laura',
  'Michael',
  'Nina',
  'Oscar',
  'Patricia',
  'Quentin',
  'Rachel',
  'Steven',
  'Tina'
]

// Datos originales
const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: '',
    category: ''
  },
  {
    image:
      'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: '',
    category: ''
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: '',
    category: ''
  },
  {
    image:
      'https://images.pexels.com/photos/29593119/pexels-photo-29593119/free-photo-of-fascinante-aurora-boreal-sobre-el-paisaje-noruego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: '',
    category: ''
  },
  {
    image:
      'https://images.pexels.com/photos/5058971/pexels-photo-5058971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: '',
    category: ''
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=400&q=80',
    title: '',
    category: ''
  }
]

// Función para obtener elementos aleatorios
function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = [...items].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

interface CardProps {
  image: string
  title: string
  category: string
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='md'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant='white' color='dark'>
        Read article
      </Button> */}
    </Paper>
  )
}

export const CarouselPerk = () => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  // Generar títulos y nombres aleatorios
  const titles = getRandomItems(titlesBank, data.length)
  const names = getRandomItems(namesBank, data.length)

  // Actualizar los datos con títulos y nombres aleatorios
  const updatedData = data.map((item, index) => ({
    ...item,
    title: titles[index],
    category: names[index] // Sustituir categoría por nombre
  }))

  const slides = updatedData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '20%' }}
      slideGap={{ base: 'xl', sm: 16 }}
      nextControlIcon={<IconArrowRight style={{ width: rem(40), height: rem(40) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(40), height: rem(40) }} />}
      align='start'
      slidesToScroll={mobile ? 1 : 2}
      loop
      pl='25px'
      pr='25px'
      mt='-90px'
      ml='20px'
      mr='-20px'
    >
      {slides}
    </Carousel>
  )
}
