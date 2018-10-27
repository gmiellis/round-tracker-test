import React from 'react';

import NavBar from './navbar';


class ExistingGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: false,
    };
    this.handleShowMembers = this.handleShowMembers.bind(this);
  }

  handleShowMembers() {
    if (this.state.showMembers) {
      this.setState({
        showMembers: false,
      });
    } else {
      this.setState({
        showMembers: true,
      });
    }
  }

  render() {
    return (

      <div>
        <NavBar />
        <h1>
          Existing Groups
        </h1>
        <div>
          {
          this.props.user.groups.map(group => (
            <div key={group._id}>
              <button
                key={group._id}
                name={group.name}
                onClick={this.handleShowMembers}
              >
                {group.groupName}
              </button>

              {this.state.showMembers &&
               (
               <div>
                   {
                   group.members.map(member => (
                     <div key={member._id}>
                       { member.name }
                     </div>
                   ))}
               </div>
               )
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default ExistingGroups;
