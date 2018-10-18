import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => (
  <div>
    <h1>Round Tracker</h1>
    <div>
      <Link to="/login">Login</Link>
    </div>
      or
    <div>
      <Link to="/register">Resgister</Link>
    </div>
  </div>
);

export default Landing;
