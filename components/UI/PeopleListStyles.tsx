import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type listStyleType = {
  color: string | number
}
const PeopleListStyles = (prop: listStyleType) => {
  return (
    <div>
      <Box bg="#709c84" border="1px" borderColor="gray.200">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        ></Stack>
      </Box>
      <Text>{prop.color}</Text>
    </div>
  )
}

export default PeopleListStyles
