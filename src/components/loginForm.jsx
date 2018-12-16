import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    const account = {...this.state.account};
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({account});
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {

    const account = { ...this.state };

    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <div
            className="form-group"
          >
            <label
              htmlFor="username"
            >
              Username
            </label>
            <input
              autoFocus
              value={account.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
              onChange={this.handleChange}
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
              value={account.password}
              id="password"
              name="password"
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;