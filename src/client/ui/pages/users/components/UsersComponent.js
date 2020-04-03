import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppBarComponent from "../../../common/AppbarComponent";
import CardComponent from "../../../common/CardComponent";
import { fetchUsers } from "../../../../actions/userActions";

class UsersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users
    });
  }

  getUserDetaisView = () => {
    let view = this.state.users.map((user, index) => (
      <CardComponent
        contentView={
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.phone}
            </Typography>
          </div>
        }
      />
    ));
    return view;
  };

  render() {
    return (
      <div>
        <AppBarComponent />
        <div className="row" style={{ float: "left", margin: "20px" }}>
          {this.getUserDetaisView()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userInfo.users
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUsers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
