import axios from 'axios'

const getLuanches = async () => {
  try {
    const LaunchType = await axios.get(
      `${'https://api.spacexdata.com/v3/launches'}`,
    )
    return LaunchType
  } catch (error) {
    error
  }
}

const getPeople = async () => {
  try {
    const LaunchType = await axios.get(`${'https://swapi.dev/api/people'}`)
    return LaunchType
  } catch (error) {
    error
  }
}

export { getPeople }

export { getLuanches }
