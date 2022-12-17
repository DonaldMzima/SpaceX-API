import type { NextPage } from 'next'
import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import ButtonX from '../components/ButtonX'
import SvgComponent from '../components/SvgComponent'

const Home: NextPage = () => {
  return (
    <Box bg={'gray'}>
      <ChakraProvider>
        <ButtonX />
      </ChakraProvider>
    </Box>
  )
}

export default Home
