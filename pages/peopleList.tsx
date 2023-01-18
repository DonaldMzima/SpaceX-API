import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { listPeople } from '../utils/types'
import { Box, Stack } from '@chakra-ui/react'
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
  console.log('checking data', data?.data?.results)

  return (
    <div>
      <NavBar />
      <Box mt={[0, 0, 0, 0]} width={[999, 999 / 999, 999 / 1]} height="24px">
        <h1>People List:</h1>
        <Box bg={'gray'} width="136%">
          {data?.data?.results.map((people: listPeople) => {
            console.log('data.value', data)
            return (
              <div key={people.birth_year}>
                <Box bg="#980c84" border="1px" borderColor="gray.200">
                  <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                  >
                    <div>
                      <p>birth year:{people.eye_color}</p>-
                      <p>height:{people.gender}</p>-
                      <p>height:{people.hair_color}</p>-
                      <p>hair color:{people.height}</p>-
                      <p>gender:{people.mass}</p>
                      <p>name:{people.name}</p>-
                      <p>skin color:{people.skin_color}</p>-
                    </div>
                  </Stack>
                </Box>
              </div>
            )
          })}
        </Box>
      </Box>
    </div>
  )
}

export default PeopleList

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
