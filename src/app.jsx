import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Landing from './components/landing';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/navbar';
import Contacts from './components/contacts';
import Groups from './components/groups';
import ExistingGroups from './components/existingGroups';
import ExistingGroups2 from './components/existingGroups2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleContactUpdate = this.handleContactUpdate.bind(this);
    this.handleCreateGroup = this.handleCreateGroup.bind(this);
    this.handleGroupUpdate = this.handleGroupUpdate.bind(this);
  }

  handleLogin(user) {
    this.setState({
      user,
    });
    console.log(this.state);
  }

  handleContactUpdate(newContact) {
    // console.log(newContact);
    const newUser = { ...this.state.user };
    // console.log(newUser);
    const newContacts = [...newUser.contacts];
    // console.log(newContacts);
    newContacts.push(newContact);
    newUser.contacts = newContacts;
    // console.log(newUser);
    axios.put('http://127.0.0.1:8080/contacts', {
      user: { _id: newUser._id, contacts: newContacts, groups: newUser.groups },
    })
      .then((response) => {
        console.log(response.date);

        this.setState({
          user: response.data,
        });
      });
  }


  handleCreateGroup(newGroup) {
    // console.log(newGroup);
    const newUser = { ...this.state.user };
    // console.log(newUser);
    const newGroups = [...newUser.groups];
    // console.log(newGroups);
    newGroups.push(newGroup);
    // console.log(newGroups);
    newUser.groups = newGroups;
    // console.log(newUser);
    console.log(newUser);
    axios.put('http://127.0.0.1:8080/groups', {
      user: { _id: newUser._id, contacts: newUser.contacts, groups: newGroups },
    })
      .then((response) => {
        // console.log(response);
        this.setState({
          user: response.data,
        });
      });
  }

  handleGroupUpdate(updatedGroup) {
    // spreads user object
    // console.log(updatedGroup);
    const newUser = { ...this.state.user };
    newUser.groups = updatedGroup;
    // console.log(newUser);
    axios.put('http://127.0.0.1:8080/existingGroups2', {
      user: { _id: newUser._id, contacts: newUser.contacts, groups: newUser.groups },
    })
      .then((response) => {
      // console.log(response);
        this.setState({
          user: response.data,
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
            )}
          />
          <Route
            exact
            path="/groups"
            render={props => this.state.user ? (
              <Groups
                {...props}
                user={this.state.user}
                onClick={this.handleCreateGroup}
              />
            ) : (
              <Redirect to="/login" />
            )
            }
          />
          <Route
            exact
            path="/existingGroups"
            render={props => this.state.user ? (
              <ExistingGroups
                {...props}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
            }
          />
          <Route
            exact
            path="/existingGroups2"
            render={props => this.state.user ? (
              <ExistingGroups2
                {...props}
                user={this.state.user}
                onClick={this.handleGroupUpdate}
              />
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
