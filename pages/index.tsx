import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PeopleList from '../components/peopleList'
import { render } from 'react-dom'

const Home: NextPage = () => {


  return (
   <PeopleList/>
  )
}

export default Home
