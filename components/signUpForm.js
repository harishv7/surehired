import React from 'react'
import Link from 'next/link'

const SignUpForm = () => (
  <div className="container contact-form">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
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
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </div>
  </div>
)

export default SignUpForm
