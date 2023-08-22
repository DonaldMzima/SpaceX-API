/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

import {
  Box,
  Text,
  Spacer,
  Stack,
  Center,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { LaunchType } from '../utils/types'
import { getLuanches } from '../utils/https'
import { useQuery } from 'react-query'
import CustomSpinner from '../components/UI/spinner'
import NavBar from '../components/NavBar'

const SpaceX = () => {
  const { data, isLoading, error } = useQuery(['getLuanches '], () =>
    getLuanches(),
  )

  if (isLoading) {
    return <CustomSpinner text={'Loading SpaceX APIs...'} />
  }

  if (error) {
    return (
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <div>An error has occurred</div>
      </Stack>
    )
  }

  console.log('DATA___ ', data?.data)
  return (
    <>
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
        <Box
          mt={[4, 8, 12]}
          px={[4, 8, 12]}
          pt="16"
          height="2000px"
          width="100%"
        >
          <Center>
            <Text fontSize="xl" color="blue.900" fontWeight="bold">
              List of SpaceX Launches:
            </Text>
          </Center>

          <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={8}>
            {!isLoading && data?.data?.length > 0 ? (
              data?.data.map((launch: LaunchType) => {
                return (
                  <div key={launch.launch_date_unix}>
                    <Center>
                      <Stack>
                        <Box
                          bg="#1f1f1a"
                          borderTopRadius="md"
                          borderColor="gray.200"
                          h={300}
                          w={400}
                        >
                          <Center>
                            <img
                              alt={'Launch image'}
                              src={launch.links.mission_patch}
                              width={200}
                              height={180}
                            />
                          </Center>
                          <Stack textAlign={'center'} color="white">
                            <Text>flight nummber:{launch.flight_number}</Text>-
                            <Text>mission name:{launch.mission_name}</Text>-
                            <Text>rocket id:{launch.rocket.rocket_id}</Text>-
                            <Text>rocket name:{launch.rocket.rocket_name}</Text>
                            -
                            <Text>rocket type:{launch.rocket.rocket_type}</Text>
                          </Stack>
                        </Box>
                      </Stack>
                    </Center>
                  </div>
                )
              })
            ) : (
              <p style={{ justifyContent: 'center', alignItems: 'center' }}></p>
            )}
          </SimpleGrid>
        </Box>
      </div>
    </>
  )
}

export default SpaceX
