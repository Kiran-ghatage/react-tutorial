import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import AppBarComponent from "../../../common/AppbarComponent";
import CardComponent from "../../../common/CardComponent";
// import { fetchUsers } from "../../../../actions/userActions";

class UsersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(err => {
        console.log(err);
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

  componentWillReceiveProps(nextProps) {}

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

export default UsersComponent;
