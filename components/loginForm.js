import React from 'react'
import Link from 'next/link'

const LoginForm = () => (
  <div className="container contact-form">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
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

export default LoginForm
