import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmail(event) {
    this.setState({ email: event.target.value });
  }
  updatePassword(event) {
    this.setState({ password: event.target.value });
  }
  updateName(event) {
    this.setState({ name: event.target.value });
  }
  updateLastname(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1> */}
          <h3>E-mail</h3>
          <input
            onChange={this.updateEmail.bind(this)}
            type="email"
            name="email"
          />

          <h3>Password</h3>
          <input
            onChange={this.updatePassword.bind(this)}
            type="password"
            name="password"
          />

          <h3>Name</h3>
          <input
            onChange={this.updateName.bind(this)}
            type="text"
            name="name"
          />

          <h3>LastName</h3>
          <input
            onChange={this.updateLastname.bind(this)}
            type="text"
            name="lastname"
          />
          <br />
          <br />
          <input type="submit" value="Valider" />
          <br />
        </form>
        <br />
      </div>
    );
  }
}

export default SignUp;
