import React, { useState, useEffect } from 'react'
import axios from 'axios'

type listPeople = {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: any[]
  starships: string[]
  url: string
}

export const PeopleList = () => {
  const [list, setList] = useState<null | listPeople[]>(null)

  const baseURL = 'https://swapi.dev/api/people'

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setList(response.data.results)
      console.log('checking a response', response)
    })
  }, [])

  return (
    <div>
      <h1>People List:</h1>

      {list?.map((people: listPeople) => {
        console.log('checking birth year', people)
        return (
          <div key={people.birth_year}>
            <p>birth year:{people.eye_color}</p>-<p>height:{people.gender}</p>-
            <p>height:{people.hair_color}</p>-<p>hair color:{people.height}</p>-
            <p>gender:{people.mass}</p>
            <p>name:{people.name}</p>-<p>skin color:{people.skin_color}</p>-
          </div>
        )
      })}
    </div>
  )
}

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
