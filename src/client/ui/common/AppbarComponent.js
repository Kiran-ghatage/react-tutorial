import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    // flexGrow: 1,
    float: "left",
    padding: "10px"
  }
}));
const AppBarComponent = props => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="col-lg-11 col-md-11 col-sm-8 col-xs-12">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
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
        <div className="pull-right">
          <Button
            color="inherit"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
