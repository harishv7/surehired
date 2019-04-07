import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer id="footer">
    <div className="section container">
      <div className="row">
        <div className="col-md-12">
          <span className="brand-title">
            Sure<b>Hired</b>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <span className="footer-links">Home</span>
          <span className="footer-links">About</span>
          <span className="footer-links">Contact</span>
          <span className="footer-links">Try Now!</span>
        </div>
      </div>
      <div className="row credit">
        <div className="col-md-12 text-center">
          © 2019 SureHired Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
