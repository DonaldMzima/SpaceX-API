import React from 'react'
import { Box, Stack, Flex, Text } from '@chakra-ui/react'
import CustomSpinner from '../components/UI/spinner'
import { getPeople } from '../utils/https'
import { useQuery } from 'react-query'
import NavBar from '../components/NavBar'

const PeopleList = () => {
  const { data, isLoading, error } = useQuery(['getPeople '], () => getPeople())

  if (isLoading) {
    return <CustomSpinner text={'Loading SpaceX APIs...'} />
  }

  if (error) {
    return <div>An error has occurred</div>
  }

  return (
    <div>
      <Flex
        justifyContent="flex-end"
        position="fixed"
        top="0"
        right="0"
        width="100%"
      >
        <NavBar />
      </Flex>
      <Box mt={[4, 8, 12]} px={[4, 8, 12]} pt="16">
        {' '}
        {/* Add padding top to account for fixed NavBar */}
        <h1>People List:</h1>
        <Flex flexWrap="wrap" justify="space-between">
          {data?.data?.results.map(
            (people: {
              birth_year: number
              name: string
              eye_color: string
              hair_color: string
              height: string | number
              gender: string
              mass: string | number
              skin_color: string
            }) => (
              <Box
                key={people.birth_year}
                bg="transparent" // Set background color to transparent
                border="1px"
                borderColor="gray.200"
                width={['100%', '45%', '30%']} // Adjust widths for different screen sizes
                mb={[4, 6]}
                p={4}
                borderRadius="md"
              >
                <Stack spacing={2}>
                  <Text textAlign="center" fontWeight="bold">
                    {people.name}
                  </Text>
                  <Text>Birth year: {people.birth_year}</Text>
                  <Text>Eye color: {people.eye_color}</Text>
                  <Text>Hair color: {people.hair_color}</Text>
                  <Text>Height: {people.height}</Text>
                  <Text>Gender: {people.gender}</Text>
                  <Text>Mass: {people.mass}</Text>
                  <Text>Skin color: {people.skin_color}</Text>
                </Stack>
              </Box>
            ),
          )}
        </Flex>
      </Box>
    </div>
  )
}

export default PeopleList
