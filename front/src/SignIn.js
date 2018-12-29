import React, { Component, Fragment } from "react";
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import "./App.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: "Homer@wild.com",
      password: "odyssey",
      flash: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
};

    
  
  render() {
    return (
      <Fragment>
        <form onSubmit={event => this.handleSubmit(event)}>
          <TextField
            label="Email"
            onChange={event => this.handleInputChange(event)}
            type="email"
            name="email"
          />
          <TextField
            label="Password"
            onChange={event => this.handleInputChange(event)}
            type="password"
            name="password"
          />
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Soumettre"
            onClick={this.handleClick}
          >
            Valider
          </Button>
          <br />
          <br />
          <Link to="/signup">
            Si vous n'avez pas de compte, inscrivez vous ici !!
          </Link>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.open}
          message="Vous êtes inscrit !!"
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.flash}</span>}
          action={[
            
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Fragment>
    );
  }
}

export default SignIn;
