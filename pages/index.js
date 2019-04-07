import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import About from '../components/about'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <div className="hero">
      <Head title="Home" />
      <Nav />
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="cover-brand-title">
                Sure<b>Hired</b> 🚀
              </span>
              <p className="cover-subtitle">
                Getting you a job is <b>our job.</b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <p className="cover-description">
                Boost your chances of getting a job in just seconds!
                <br />
                SureHired is the best platform for everyone to gather deep
                analysis of their resume, cover letter and even cover photo!
                What's more? Get a real recruiter to review your resume and get
                it edited!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Footer />
  </div>
)

export default Home
