import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const About = () => (
  <div>
    <div className="section container" id="about">
      <div className="row">
        <div className="col-md-12">
          <h1 className="section-heading">What is SureHired?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis arcu quam. Duis a eleifend diam. Sed orci mauris, cursus vitae
            nisl malesuada, efficitur pretium erat. Vestibulum vel est ante.
            Aenean id sollicitudin erat, ut ullamcorper tellus. Nam augue mi,
            pharetra in vehicula vitae, maximus dignissim elit. Vestibulum ac
            tincidunt nibh. Cras ac lorem nisi. Praesent suscipit tortor non
            nunc malesuada, sit amet vestibulum purus commodo. Aliquam vel ipsum
            mi. Donec non lobortis quam. Nam rhoncus varius nulla sed luctus.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            className="placeholder-img"
            src="https://via.placeholder.com/250"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img
            className="placeholder-img"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div className="col-md-3">
          <img
            className="placeholder-img"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div className="col-md-3">
          <img
            className="placeholder-img"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div className="col-md-3">
          <img
            className="placeholder-img"
            src="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </div>
    <div className="section container" id="about-more">
      <div className="row">
        <div className="col-md-6">
          <img
            className="placeholder-img vertical-align"
            src="https://via.placeholder.com/350"
          />
        </div>
        <div className="col-md-6">
          <h1 className="section-heading">
            Free for everyone. <br />
            Pro for some.
          </h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis arcu quam. Duis a eleifend diam. Sed orci mauris, cursus vitae
            nisl malesuada, efficitur pretium erat. Vestibulum vel est ante.
            Aenean id sollicitudin erat, ut ullamcorper tellus. Nam augue mi,
            pharetra in vehicula vitae, maximus dignissim elit. Vestibulum ac
            tincidunt nibh. Cras ac lorem nisi. Praesent suscipit tortor non
            nunc malesuada, sit amet vestibulum purus commodo. Aliquam vel ipsum
            mi. Donec non lobortis quam. Nam rhoncus varius nulla sed luctus.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default About
