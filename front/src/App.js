import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <form
          method="POST"
          enctype="multipart/form-data"
          action="uploaddufichier"
        >
          <input type="file" name="monfichier" accept="image/png" multiple />
          <button> envoyer </button>
        </form>
      </div>
    );
  }
}

export default App;
