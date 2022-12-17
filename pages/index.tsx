import type { NextPage } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import ButtonX from '../components/ButtonX'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <ButtonX />
    </ChakraProvider>
  )
}

export default Home
