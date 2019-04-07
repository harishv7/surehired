import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <div className="hero">
      <Head title="Home" />
      <Nav />
      <div className="text-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h1>SureHired 🚀</h1>
              <p className="lead mb-5 cover-subtitle">
                Boost your chances of getting hired <b>right now!</b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <p>
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
    <div className="section container" id="about">
      <h1>What is SureHired?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        arcu quam. Duis a eleifend diam. Sed orci mauris, cursus vitae nisl
        malesuada, efficitur pretium erat. Vestibulum vel est ante. Aenean id
        sollicitudin erat, ut ullamcorper tellus. Nam augue mi, pharetra in
        vehicula vitae, maximus dignissim elit. Vestibulum ac tincidunt nibh.
        Cras ac lorem nisi. Praesent suscipit tortor non nunc malesuada, sit
        amet vestibulum purus commodo. Aliquam vel ipsum mi. Donec non lobortis
        quam. Nam rhoncus varius nulla sed luctus.
      </p>
    </div>
  </div>
)

export default Home
