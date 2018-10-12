import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './navbar';
import Login from './login';
import Contacts from './contacts';
import Groups from './groups';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="static" alignContents="center">
      <Toolbar alignContents="center">
        <Typography
          variant="title"
          align="center"
          color="inherit"
        >
          Round Tracker
        </Typography>
      </Toolbar>
    </AppBar>
    <NavBar />
    {/* <Login /> */}
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/groups" component={Groups} />
    </Switch>

  </React.Fragment>
);

export default App;
