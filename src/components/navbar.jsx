import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/register">Register</Link> */}
      <Link to="/contacts">Contacts</Link>
      <Link to="/groups">Groups</Link>
    </div>
  );
}

export default NavBar;
