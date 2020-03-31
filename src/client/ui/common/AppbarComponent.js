import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    float: "left",
    padding: "0px 10px",
    color: "#ffffff"
  },
  userButton: {
    color: "red"
  }
}));
const AppBarComponent = props => {
  const classes = useStyles();
  const [isAuthenticatedUser, setIsAuthenticatedUser] = React.useState(
    localStorage.getItem("isAuthenticatedUser")
  );
  console.log('props ------AppBarComponent------', props);
  
  const menuItemsView = (
    <div style={{ width: "97%" }}>
      <Typography
        variant="h6"
        className={classes.title}
        onClick={() => {
          window.location = "/about";
        }}
      >
        About
      </Typography>
      <Typography
        variant="h6"
        className={classes.title}
        onClick={() => {
          window.location = "/users";
        }}
      >
        Users
      </Typography>
    </div>
  );

  const login = () => {
    window.location = "/login";
  };
  const logout = () => {
    setIsAuthenticatedUser(false);
    localStorage.setItem("isAuthenticatedUser", false);
    window.location = "/";
  };

  return (
    <AppBar
      color={props.color ? props.color : "transparent"}
      style={
        props.appBarStyle
          ? props.appBarStyle
          : {
              position: "static",
              background: "linear-gradient(to right, #3e51b5 3%, #9999ff 100%)"
            }
      }
    >
      {/* linear-gradient(to right, #00467f, #a5cc82); */}
      <Toolbar>
        {props.menuItemsView ? props.menuItemsView : menuItemsView}
        <div className="pull-right">
          <Button
            color="inherit"
            onClick={isAuthenticatedUser === "true" ? logout : login}
          >
            {isAuthenticatedUser === "true" ? (
              <p style={props.LogOutTextStyle}>Logout</p>
            ) : (
              <p style={props.LogInTextStyle}>Login</p>
            )}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
