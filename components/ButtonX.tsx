import { Button, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SvgComponent from './SvgComponent'
import NavBar from './NavBar'

const ButtonX = () => {
  return (
    <>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <div>
          <Link href="/spaceX">
            <Button
              size="md"
              height="48px"
              width="200px"
              bg="#709c84"
              _hover={{ border: '2px solid #1C6FEB' }}
            >
              SpaceX API
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/peopleList">
            <Button
              size="md"
              height="48px"
              width="200px"
              bg="#709c84"
              _hover={{ border: '2px solid #1C6FEB' }}
            >
              People List API
            </Button>
          </Link>
        </div>
        <SvgComponent />
      </Stack>
    </>
  )
}

export default ButtonX
