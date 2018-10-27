import React from 'react';

import NavBar from './navbar';
import ContactCard from './contactCard';


class ExistingGroups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowMembers = this.handleShowMembers.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value);
  }

  handleShowMembers() {

  }

  render() {
    const groups = this.props.user.groups;

    const optionItems =
      groups.map((group) => <option value={group.groupName} key={group._id}>{group.groupName}</option>);

    const findArray =
      groups.filter(group => {
        return group.groupName === this.state.value;
      });

    return (

      <div>

        <NavBar />

        <h1>
          Existing Groups 2
        </h1>

        <select
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {optionItems}
        </select>
        <div>
          {
            this.state.value &&
            findArray[0].members.map(member => { return <div key="member._id">{member.name}</div>; })
          }
        </div>
      </div>
    );
  }
}


export default ExistingGroups2;
