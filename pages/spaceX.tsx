/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

import { Box, Text, Spinner, Stack } from '@chakra-ui/react'
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
      <NavBar />
      <Box mt={[0, 0, 0, 0]} width={[999, 999 / 999, 999 / 1]} height="100%">
        <div
          style={{
            textAlign: 'center',
            flexDirection: 'column',
            backgroundColor: '#597f85',
            display: 'flex',
            paintOrder: 'fixed',
          }}
        ></div>
      </Box>

      <h1
        style={{
          boxShadow: '0px 5px 100px -7px rgba(29, 60, 55, 0.95)',
          marginLeft: 420,
          width: 500,
          paintOrder: 'fixed',
        }}
      >
        List of spaceX Launches:
      </h1>

      {!isLoading && data?.data?.length > 0 ? (
        data?.data.map((launch: LaunchType) => {
          return (
            <div key={launch.launch_date_unix}>
              <img
                alt={'Launch image'}
                src={launch.links.mission_patch}
                width={200}
                height={180}
              />
              <p>flight nummber:{launch.flight_number}</p>-
              <p>mission name:{launch.mission_name}</p>-
              <p>rocket id:{launch.rocket.rocket_id}</p>-
              <p>rocket name:{launch.rocket.rocket_name}</p>-
              <p>rocket type:{launch.rocket.rocket_type}</p>
            </div>
          )
        })
      ) : (
        <p style={{ justifyContent: 'center', alignItems: 'center' }}></p>
      )}
    </>
  )
}

export default SpaceX
