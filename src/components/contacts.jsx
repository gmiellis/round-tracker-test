import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  paper2: {
    width: '90%',
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  // form: {
  //   width: '80%', // Fix IE11 issue.
  //   marginTop: theme.spacing.unit,
  // },
  submit: {
    marginTop: theme.spacing.unit * 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: '',
    };
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleAddContact = event => {
    event.preventDefault();
    console.log(this.state.name);
  };

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Paper className={classes.paper2}>
          <Typography variant="title">
              Contacts
          </Typography>
          <form onSubmit={this.handleAddContact}>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleFieldChange}
            />
            <button className="addpropbutton" type="submit">
            Add to Contact List
            </button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Contacts);
