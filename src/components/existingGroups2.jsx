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
    this.handleRandomise = this.handleRandomise.bind(this);
    this.handleWhosNext = this.handleWhosNext.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value);
  }

  handleRandomise() {
    const groups = this.props.user.groups;
    const findArray =
      groups.filter(group => {
        return group.groupName === this.state.value;
      });
    const shuffleMembers = findArray[0].members.map(elements => ({
      sort: Math.random(),
      value: elements,
    })).sort((a, b) => a.sort - b.sort).map((a) => a.value);
    findArray[0].members = shuffleMembers;
    let newGroupObject =
    groups.filter(group => {
      return group.groupName !== this.state.value;
    });
    newGroupObject = [...newGroupObject, findArray[0]];
    this.props.onClick(newGroupObject);
  }

  handleWhosNext() {
    // gets groups
    const groups = this.props.user.groups;
    // finds group by selected value
    const findArray =
      groups.filter(group => {
        return group.groupName === this.state.value;
      });
    // gets group members array
    let array = findArray[0].members;
    // takes first array element and moves to end
    const [first, ...rest] = array;
    array = [...rest, first];
    // replaces members array
    findArray[0].members = array;
    // console.log(findArray);
    // create new groups object
    let newGroupObject =
      groups.filter(group => {
        return group.groupName !== this.state.value;
      });
    // push altered object into new Group object
    newGroupObject = [...newGroupObject, findArray[0]];
    // console.log(newGroupObject);
    this.props.onClick(newGroupObject);
  }

  render() {
    // Select Options
    const groups = this.props.user.groups;
    const optionItems =
      groups.map((group) => <option value={group.groupName} key={group._id}>{group.groupName}</option>);

    // find correct group array to list.
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
          Select Group >
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
        <button
          onClick={this.handleWhosNext}
        >
          Next Drink
        </button>
        <button
          onClick={this.handleRandomise}
        >
          Randomise
        </button>
      </div>
    );
  }
}


export default ExistingGroups2;
