import React from "react";
import axios from "axios";

import AppBarComponent from "../../../common/AppbarComponent";

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
      <div key={index} style={{ border: "1px solid #e0dcdc",background: "#f7f5f5" }}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    ));
    return view;
  };

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <AppBarComponent />
        {this.getUserDetaisView()}
      </div>
    );
  }
}

export default AboutComponent;
