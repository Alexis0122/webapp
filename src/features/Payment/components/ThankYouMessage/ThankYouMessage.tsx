import { Container, Text, Divider } from '@mantine/core'

export default function ThankYouMessage() {
  return (
    <Container
      p='lg'
      style={{
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Text fz='xl' fw={700} ta='center' c='red.9'>
        Dear Valued Supporter,
      </Text>

      <Divider my='sm' />

      <Text fz='md' fw={600} c='gray.8' ta='justify'>
        Your generosity knows no bounds. At{' '}
        <Text span fw={800} c='gray.7'>
          CROWDEVS
        </Text>
        , every donation you make supports the innovative projects created by passionate individuals
        on our platform. Your contribution is a beacon of hope, empowering their dreams and
        aspirations.
      </Text>

      <Divider my='sm' />

      <Text fz='md' fw={700} ta='center' c='gray.8'>
        Thank you from the bottom of our hearts,
      </Text>

      <Text fz='lg' fw={700} ta='center' c='red.9'>
        The CROWDEVS Team
      </Text>
    </Container>
  )
}
