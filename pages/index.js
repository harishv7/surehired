import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="py-5 text-center cover parallax" id="home">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1>SureHired.</h1>
            <p className="lead mb-5 cover-subtitle">
              Boost your chances of getting hired <b>right now!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
