import React from "react";
import AppBarComponent from "../../../common/AppbarComponent";
import LoginFormComponent from "../../../common/LoginFormComponent";
import AlertComponent from "../../../common/AlertComponent";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onLoginClieck = () => {
    alert("Login button clicked ---- !!!! ");
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
          />
        </div>
      </div>
    );
  }
}

export default LoginComponent;
