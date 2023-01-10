/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

import { Box, Link } from '@chakra-ui/react'
import { LaunchType } from '../utils/types'
import { getLuanches } from '../utils/https'
import { useQuery } from '@tanstack/react-query'

const SpaceX = () => {
  const { data, isLoading, error } = useQuery(['getLuanches '], () =>
    getLuanches(),
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Box mt={[2, 4, 6, 8]} width={[1, 1 / 2, 1 / 4]} height="24px">
      <div
        style={{
          textAlign: 'center',
          flexDirection: 'column',
          backgroundColor: '#597f85',
          display: 'flex',
          paintOrder: 'fixed',
        }}
      >
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

        {data?.data.map((launch: LaunchType) => {
          //  console.log ("checking",launch)
          return (
            <div
              key={launch.launch_date_unix}
              style={{
                height: 550,
                width: 500,
                backgroundColor: '#ddedf0',
                marginTop: 20,
                marginLeft: 420,
                borderRight: 'solid',

                borderLeft: 'solid',
                borderRadius: 45,
              }}
            >
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
        })}
      </div>
    </Box>
  )
}

export default SpaceX
