import React, { Fragment } from 'react';
import NavBar from './navbar';

const Groups = (props) => (
  <Fragment>
    <h1>{props.user.firstName}</h1>
    <h1>{props.user.lastName}</h1>
    <h1>{props.user.email}</h1>
    <h1>{props.user.password}</h1>
    <NavBar />
    Groups Page
  </Fragment>
);

export default Groups;
