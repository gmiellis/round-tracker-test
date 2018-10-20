import React, { Fragment } from 'react';
import axios from 'axios';
import NavBar from './navbar';

// import ContactCard from './contactCard';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      contacts: [
        {
          name: 'paul',
          _id: 1,
        },
        {
          name: 'john',
          _id: 2,
        },
      ],
      groupName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <Fragment>
        Group Page
        <NavBar />
        <form>

          Add a group name and choose its members from the drop down

          <div>
            <input
              name="groupName"
              type="text"
              value={this.state.groupName}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <select ref="userInput" defaultValue="">
              <option value="" disabled>Members</option>
              {
                this.state.contacts.map(contact => (
                  <option
                    key={contact._id}
                    value={contact.name}
                  >
                    {contact.name}
                  </option>
                ))}
              }
            </select>
          </div>

          <div>
            {this.state.groupName}
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Groups;
