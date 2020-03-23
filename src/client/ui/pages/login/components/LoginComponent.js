import React from "react";
import validator from "validator";

import AppBarComponent from "../../../common/AppbarComponent";
import LoginFormComponent from "../../../common/LoginFormComponent";
import AlertComponent from "../../../common/AlertComponent";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailErrorLabel: ""
    };
  }

  onEmailChange = event => {
    let isItValidEmail = validator.isEmail(event.target.value); //=> true    
    if (isItValidEmail) {
      this.setState({
        email: event.target.value,
      });
    } else {
      this.setState({
        emailErrorLabel: "Please Enter valid email....!!!!!"
      })
    }
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onLoginClieck = () => {
    if (this.state.email && this.state.password) {
      alert("Please enter email nad password");
    } else {
      alert("Login button clicked ---- !!!! ");
    }
  };

  render() {
    return (
      <div>
        <div>
          <AppBarComponent />
          <LoginFormComponent
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onLoginClieck={this.onLoginClieck}
            emailErrorMsg={this.state.emailErrorMsg}
            emailErrorLabel={this.state.emailErrorLabel}
          />
        </div>
      </div>
    );
  }
}

export default LoginComponent;
