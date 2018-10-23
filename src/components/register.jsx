import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleRegister() {
    // const name = this.state.firstName;
    // this.setState({ contacts: [...this.state.contacts, name] });
    axios.post('http://127.0.0.1:8080/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(() => {
        this.props.history.push('/login');
      });

    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div>
          <label htmlFor="firstName">
          First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
          Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
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
          <button onClick={this.handleRegister}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Register;
