import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Hero />
    <About />
    <Footer />
  </div>
)

export default Home
