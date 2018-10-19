import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './navbar';
import ContactCard from './contactCard';


class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      // contacts: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }


  render() {
    const newContact = this.state;
    return (

      <div>
        <NavBar />
        <h1>Contacts</h1>
        <p>{this.props.user.firstName}</p>
        <p>
          enter your friends details below and add them to your contacts list.
        </p>
        <div>
          <label>
            Contact Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button
            onClick={() => this.props.onClick(newContact)}
          >
          Add Contact
          </button>
        </div>
        <div>
          {this.props.user.contacts.map(contact => (
            <div key={contact._id}>
              <ContactCard
                key={contact._id}
                name={contact.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;


 // const newContact = this.state.name;
    //
    // console.log(this.state);
    // this.setState({ contacts: [...this.state.contacts, newContact] });
{/* {
          this.props.user.contacts.length > 0
            ? null
            : (
              <div>
                {this.props.user.contacts.map(name => (
                  <div key={name}>
                    {name}
                  </div>
                ))}
              </div>
            )
          } */}
