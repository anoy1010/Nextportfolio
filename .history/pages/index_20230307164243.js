import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Noh Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <header>
        < Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Works />
        <Contact/>
      </main>
      
      <Footer/>
    </>
  )
}
