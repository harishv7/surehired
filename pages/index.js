import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

const title = 'SureHired 🚀'
const subtitle = 'Getting you a job is our job.'
const description = `Boost your chances of getting a job in just seconds!
              SureHired is the best platform for everyone to gather deep
              analysis of their resume, cover letter and even cover photo!
              What's more? Get a real recruiter to review your resume and get it
              edited!`

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Hero title={title} subtitle={subtitle} description={description} />
    <About />
    <Footer />
  </div>
)

export default Home
