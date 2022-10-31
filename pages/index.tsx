import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PeopleList from '../components/peopleList'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'
import Button from '../components/button'

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <SpaceX />
      <Button />
    </RecoilRoot>

   <PeopleList/>
  )
}

export default Home
