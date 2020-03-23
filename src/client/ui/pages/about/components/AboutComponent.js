import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import AppBarComponent from "../../../common/AppbarComponent";
import CardComponent from "../../../common/CardComponent";

class AboutComponent extends React.Component {
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
      // <div
      //   className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
      //   key={index}
      //   style={{ border: "1px solid #e0dcdc", background: "#f7f5f5", float: "left" }}
      // >
      //   <h1>{user.name}</h1>
      //   <p>{user.email}</p>
      //   <p>{user.phone}</p>
      // </div>
    ));
    return view;
  };

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <AppBarComponent />
        <div className="row" style={{float: "left", margin: "20px"}}>
          {this.getUserDetaisView()}
        </div>
      </div>
    );
  }
}

export default AboutComponent;
