import React from "react";
import validator from "validator";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import AppBarComponent from "../../../common/AppbarComponent";
import LoginFormComponent from "../../../common/LoginFormComponent";
import AlertComponent from "../../../common/AlertComponent";
import LogoComponent from "../../../common/LogoComponent";

import LOCALIZED_STRINGS from "../constants/loginConstatnts";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMsgs: {
        emailErrorMsg: "",
        passwordErrorMsg: ""
      },
      isAlertOpen: false,
      alertMsg: "",
      alertTitle: ""
    };
    this.isItValidEmail = false;
  }

  onEmailChange = event => {
    this.isItValidEmail = validator.isEmail(event.target.value); //=> true
    if (this.isItValidEmail) {
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
    } else if (!this.isItValidEmail) {
      this.setState({
        isAlertOpen: true,
        alertMsg: LOCALIZED_STRINGS.INVALID_EMAIL_MESSAGE
      });
    } else {
      localStorage.setItem("isAuthenticatedUser", true);
      window.location = "/dashboard";
    }
  };

  onAlertClose = () => {
    this.setState({
      isAlertOpen: false,
      alertMsg: ""
    });
  };

  alertActions = () => {
    const actions = (
      <div>
        <Button onClick={this.onAlertClose} color="primary">
          Ok
        </Button>
      </div>
    );
    return actions;
  };

  render() {
    const onChangeCallBacks = {
      onEmailChange: this.onEmailChange,
      onPasswordChange: this.onPasswordChange
    };
    return (
      <div>
        <AppBarComponent
          menuItemsView={<LogoComponent />}
          color="transparent"
          appBarStyle={{ position: "fixed", boxShadow: "none" }}
        />{" "}
        <div style={{ margin: "2px 0px" }}>
          <LoginFormComponent
            onEmailChange={this.onEmailChange}
            onChangeCallBacks={onChangeCallBacks}
            errorMsgs={this.state.errorMsgs}
            onLoginButtonClick={this.onLoginButtonClick}
          />
        </div>
        <AlertComponent
          open={this.state.isAlertOpen}
          dailogBoxText={this.state.alertMsg}
          dailogBoxTitle={this.state.alertTitle}
          onDailogBoxClose={this.onAlertClose}
          alertActions={this.alertActions}
        />
      </div>
    );
  }
}

export default LoginComponent;
