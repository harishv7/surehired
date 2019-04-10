import React from 'react'
import Link from 'next/link'

const SignUpForm = () => (
  <div className="container contact-form">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form>
        <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Doe"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.submitForm} />
        </form>
      </div>
    </div>
  </div>
)

export default SignUpForm
