import React, { Component } from 'react';

class LoginForm extends Component {
  username = React.createRef();
  password = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.username.current.value, this.password.current.value);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div
            className="form-group"
          >
            <label
              htmlFor="username"
            >
              Username
            </label>
            <input
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div
            className="form-group"
          >
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={this.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;