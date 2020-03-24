import React from "react";
import validator from "validator";

import AppBarComponent from "../../../common/AppbarComponent";
import LoginFormComponent from "../../../common/LoginFormComponent";
import DailogBoxComponent from "../../../common/DailogBoxComponent";
import AlertComponent from "../../../common/AlertComponent";
import LOCALIZED_STRINGS from "../constants/loginConstatnts";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isItValidEmail: false,
      errorMsgs: {
        emailErrorMsg: "",
        passwordErrorMsg: ""
      },
      isAlertOpen: false,
      alertMsg: ""
    };
  }

  onEmailChange = event => {
    let isItValidEmail = validator.isEmail(event.target.value); //=> true
    if (isItValidEmail) {
      this.setState({
        email: event.target.value,
        errorMsgs: {
          emailErrorMsg: ""
        }
      });
    } else {
      this.setState({
        errorMsgs: {
          emailErrorMsg: LOCALIZED_STRINGS.INVALID_EMAIL_MESSAGE
        }
      });
    }
  };

  onPasswordChange = event => {
    if (event.target.value) {
      this.setState({
        password: event.target.value,
        errorMsgs: {
          passwordErrorMsg: ""
        }
      });
    } else {
      this.setState({
        errorMsgs: {
          passwordErrorMsg: LOCALIZED_STRINGS.INVALID_PASSWORD_MESSAGE
        }
      });
    }
  };

  onLoginButtonClick = () => {
    if (this.state.email === "" && this.state.password === "") {
      alert(LOCALIZED_STRINGS.INVALID_EMAIL_PASSWORD_MESSAGE);
    } else {
      this.setState({
        isAlertOpen: true,
        alertMsg: "Successfully Logged In ...!"
      });
    }
  };

  onAlertClose = () => {
    this.setState({
      isAlertOpen: false,
      alertMsg: ""
    });
  };
  render() {
    return (
      <div>
          <AppBarComponent />
          <div style={{margin: "2px 0px"}}>
            <LoginFormComponent
              onEmailChange={this.onEmailChange}
              onPasswordChange={this.onPasswordChange}
              onLoginButtonClick={this.onLoginButtonClick}
              errorMsgs={this.state.errorMsgs}
            />
          </div>
        <DailogBoxComponent
          open={this.state.isAlertOpen}
          dailogBoxText={this.state.alertMsg}
          onDailogBoxClose={this.onAlertClose}
        />
      </div>
    );
  }
}

export default LoginComponent;
