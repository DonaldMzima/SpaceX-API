import axios from 'axios'

// const getLuanches = async () => {
//   try {
//     console.log()
//   } catch (error) {
//     throw new Error(error as string)
//   }
// }

const baseURL = 'https://api.spacexdata.com/v3/launches'

const getLuanches = async () => {
  try {
    const LaunchType = await axios.get(`${baseURL}`)
    return LaunchType
  } catch (error) {
    error
  }
}

export { getLuanches }
