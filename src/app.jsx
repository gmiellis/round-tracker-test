import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// import AppBar from '@material-ui/core/AppBar';
// // import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from './components/landing';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/navbar';
import Contacts from './components/contacts';
import Groups from './components/groups';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleContactUpdate = this.handleContactUpdate.bind(this);
  }

  handleLogin(user) {
    this.setState({ user });
  }

  handleContactUpdate(newContact) {
    const newUser = { ...this.state.user };
    // console.log(newUser);
    const newContacts = [...newUser.contacts];
    // console.log(newContacts);
    newContacts.push(newContact);
    newUser.contacts = newContacts;
    this.setState({ user: newUser });
    // console.log(this.state.user);

    axios.put('http://127.0.0.1:8080/contacts', {
      user: this.state.user,
    })
      .then((response) => {
        this.setState({
          user: response.data.user,
        });
      });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/home"
            render={props => this.state.user ? (
              <Home {...props} user={this.state.user} />
            ) : (
              <Redirect to="/login" />
            )
            }
          />
          <Route
            exact
            path="/contacts"
            render={props => this.state.user ? (
              <Contacts
                {...props}
                user={this.state.user}
                onClick={this.handleContactUpdate}
              />
            ) : (
              <Redirect to="/login" />
            )
            }
          />
          <Route
            exact
            path="/groups"
            render={props => this.state.user ? (
              <Groups {...props} user={this.state.user} />
            ) : (
              <Redirect to="/login" />
            )
            }
          />
        </Switch>

      </div>
    );
  }
}

export default App;
