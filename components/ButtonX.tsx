import { Button, Container, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ButtonX = () => {
  return (
    <div>
      <Link href="/spaceX">
        <Button
          size="md"
          height="48px"
          width="200px"
          bg="orange.400"
          _hover={{ border: '2px solid #1C6FEB' }}
        >
          flex
        </Button>
      </Link>
    </div>
  )
}

export default ButtonX
