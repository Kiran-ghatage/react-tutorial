import React from "react";
import AppBarComponent from "../../../common/AppbarComponent";
import LoginFormComponent from "../../../common/LoginFormComponent";
import AlertComponent from "../../../common/AlertComponent";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    });
  };
  render() {
    const { userName, password } = this.state;
    const values = { userName, password };
    return (
      <div>
        <AppBarComponent />
        <LoginFormComponent handleChange={this.handleChange} values={values} />
      </div>
    );
  }
}

export default LoginComponent;
