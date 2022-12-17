import type { NextPage } from 'next'

import Button from '../components/button'
import { ChakraProvider } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Button />
    </ChakraProvider>
  )
}

export default Home
