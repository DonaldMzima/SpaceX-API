import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SpaceX from '../components/spaceX'
import { render } from 'react-dom'

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
