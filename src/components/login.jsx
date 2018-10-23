import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin() {
    event.preventDefault();
    axios.post('http://127.0.0.1:8080/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        this.props.onLogin(response.data);
        this.props.history.push('/home');
        // console.log(response.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button> or <Link to="/register">Sign Up</Link>
        </div>
        {
          this.state.errorMessage &&
          <div><span>{this.state.errorMessage}</span></div>
        }
      </div>
    );
  }
}

export default Login;
