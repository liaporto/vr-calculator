import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/general/Footer'
import AmountInput from '../components/form/AmountInput'
import styles from '../styles/Home.module.css'
import Form from '../components/form/Form'
import VRCalculator from '../components/blocks/VRCalculator'

const Home: NextPage = () => {

  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          VR Calculator
        </h1>

        <VRCalculator/>
      </main>
  )
}

export default Home
