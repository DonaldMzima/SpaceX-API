import type { NextPage } from 'next'
import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import ButtonX from '../components/ButtonX'
// import SvgComponent from '../components/SvgComponent'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <Box bg={'gray'} height="1650px" width="100%" pos="fixed">
      <NavBar />
      <ButtonX />
    </Box>
  )
}

export default Home
