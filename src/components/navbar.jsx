import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    display: 'flex',
    margin: theme.spacing.unit,
  },
  div: {
    display: 'flex',
    margin: theme.spacing.unit,
    justifyContent: 'space-around',
  },
});


function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.div}>
      <Button component={Link} to="/Login" color="primary" className={classes.button}>
        Login
      </Button>
      <Button component={Link} to="/Contacts" color="primary" className={classes.button}>
        Contacts
      </Button>
      <Button component={Link} to="/Groups" color="primary" className={classes.button}>
        Groups
      </Button>
    </div>
  );
}

export default withStyles(styles)(NavBar);
