import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const About = () => (
  <div>
    <div className="section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-heading">What is SureHired?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="section-description">
              SureHired was created for the reason to ensure we can help enhance the chances of
              job seekers getting hired. Today's market is more competitive than, and it is not
              as simple as drafting a resume. For this reason, SureHired provides a comprehensive analysis of your resume,
              cover letter, cover photo and even your Facebook profile to tell you how do you come across as an applicant.
              All this is done with cutting edge technologies of machine learning and facial recognition.
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
            We want SureHired to benenfit as many people as possible. To do that, we have ensured that the core features will remain free.
            But, for the Pros, we offer you even more. You can even opt for an actual recruiter to review your resume, cover letter etc. and provide
            you with actionable tips on how to boost your chances of getting hired in your next dream job!
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default About
