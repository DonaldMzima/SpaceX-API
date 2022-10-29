import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { MdLightMode } from 'react-icons/md'
import { MdNightlight } from 'react-icons/md'
import { darkModeState } from '../store/atom'
import { useRecoilState } from 'recoil'

type RocketType = {
  rocket_id: string
  rocket_name: string
  rocket_type: string
}
type LinkType = {
  mission_patch: string
  mission_patch_small: string
  reddit_campaign: string
  reddit_launch: string
  reddit_recovery: string
}
type LaunchSiteType = {
  site_id: string
  site_name: string
  site_name_long: string
}
type LaunchType = {
  crew: null | any
  details: string
  flight_number: number
  is_tentative: boolean
  last_date_update: string
  last_ll_launch_date: null | any
  last_ll_update: null | any
  last_wiki_launch_date: string
  last_wiki_revision: string
  last_wiki_update: string
  launch_date_local: string
  launch_date_source: String
  launch_date_unix: number
  launch_date_utc: string
  launch_site: LaunchSiteType
  launch_success: boolean
  launch_window: number
  launch_year: string
  links: LinkType
  mission_id: any[]
  mission_name: string
  rocket: RocketType
  ships: string[]
}

const SpaceX = () => {
  const [launches, setLaunch] = useState<null | LaunchType[]>(null)

  const baseURL = 'https://api.spacexdata.com/v3/launches'

  const [dark, setDark] = useRecoilState(darkModeState)
  const [theme, setTheme] = useState<null | string | undefined>()
  const [toggle, setToggle] = useState(theme === 'dark' ? true : false)

  const colorMode = () => {
    toggle
      ? localStorage.setItem('darkMode', 'dark')
      : localStorage.setItem('darkMode', 'light')

    setToggle(!toggle)
  }

  useEffect(() => {
    const darkModeValue = localStorage.getItem('darkMode')

    if (darkModeValue === 'dark') {
      setDark(darkModeValue)
    }

    if (!!theme) {
      localStorage.setItem('darkMode', 'light')
    }
  }, [dark])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(true))
    const cat = localStorage.getItem('darkMode')
    console.log('darkMode', cat)
  }, [])

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setLaunch(response.data)
    })
  }, [])

  return (
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
      <button
        className={` p-3  rounded-full ${
          dark ? 'bg-white  text-black' : 'bg-black text-white '
        } absolute mx-8 right-0  `}
        onClick={() => colorMode()}
      >
        {toggle ? (
          <>
            <MdNightlight className="text-xl" />
          </>
        ) : (
          <MdLightMode className="text-xl" />
        )}
      </button>

      {launches?.map((launch: LaunchType) => {
        //  console.log ("checking",launch)
        return (
          <div
            className={`${dark ? ' text-white ' : ' text-blueGray-700 '}`}
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
  )
}

export default SpaceX
