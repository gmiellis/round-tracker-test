import React from 'react';
import NavBar from './navbar';

const Home = (props) => (
  <div>
    <NavBar />
    <h1>Home</h1>
    <p>
      Welcome {props.user.firstName}
    </p>
    <p>
      Use this app to keep track of whos turn it is to get the drinks in!!
    </p>
    <p>
      CHEERS!
    </p>
  </div>
);

export default Home;
