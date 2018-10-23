import React, { Fragment } from 'react';
import NavBar from './navbar';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      members: [],
      groups: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(e) {
    const { checked, value } = e.target;
    let members = null;
    if (checked) {
      members = [...this.state.members, value];
    } else {
      members = this.state.members.filter(el => el !== value);
    }
    this.setState({ members }, () => console.log(this.state.members));
  }

  handleInput(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleClick() {
    const members = this.state.members.map(id => {
      return this.props.user.contacts.find(c => c._id == id);
    });
    // console.log(members);

    this.setState({
      members: [...this.state.members, members],
      groups: [],
    });
    const groupName = this.state.groupName;
    const groupObject = { groupName, members };
    // console.log(groupObject);
    // if (this.props.user.groups.length < 1) {
    this.setState({
      // groups: [...this.state.groups, groupObject],
      groupName: '',
      members: [],
    });
    // console.log(this.state.groups);
    // } else {
    //   this.setState({
    //     groups: [...this.state.groups, groupObject],
    //     groupName: '',
    //     members: [],
    //   });
    //   console.log(this.state);
    // }
    this.props.onClick(groupObject);
  }

  render() {
    // const newGroup = this.state.groups;
    return (
      <Fragment>
        Group Page
        <NavBar />
        <div className="contacts">
        Contacts
          <div>
            <input
              value={this.state.groupName}
              type="text"
              name="groupName"
              onChange={this.handleInput}
            />
          </div>
          {
            this.props.user.contacts.map(({ _id, name }) => {
              return (
                <div key={_id}>
                  <input
                    value={_id}
                    type="checkbox"
                    onChange={this.handleChange}
                  />{name}
                </div>
              );
            })
          }
          <button
            type="submit"
            onClick={
              () => {
                this.handleClick();
                // this.props.onClick(newGroup);
              }}
          >
          Add names
          </button>
        </div>
        <div className="newGroup">
          {/* {this.state.groups.groupName} */}
        </div>

      </Fragment>
    );
  }
}

export default Groups;

      // contacts: [
      //   {
      //     name: 'paul',
      //     _id: 1,
      //   },
      //   {
      //     name: 'john',
      //     _id: 2,
      //   },
      //   {
      //     name: 'jane',
      //     _id: 3,
      //   },
      //   {
      //     name: 'frank',
      //     _id: 4,
      //   },
      //   {
      //     name: 'terry',
      //     _id: 5,
      //   },
      //   {
      //     name: 'lando',
      //     _id: 6,
      //   },
      // ],
      // groups: [],
