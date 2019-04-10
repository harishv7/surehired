import React from 'react'
import Link from 'next/link'

class SignUpForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    fetch('/api/v1/auth/register', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <div className="container contact-form">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
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
                  required
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpForm
