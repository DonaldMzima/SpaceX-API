import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PeopleList from '../components/peopleList'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <SpaceX />
    </RecoilRoot>

   <PeopleList/>
  )
}

export default Home
