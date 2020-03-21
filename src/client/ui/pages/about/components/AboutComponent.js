import React from "react";
import axios from "axios";

import AppBarComponent from "../../../common/AppbarComponent";

class AboutComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        console.log("response ------------", JSON.stringify(response, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <AppBarComponent />
        <div
          style={{
            display: "inline-block",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: "200px",
            height: "100px",
            margin: "auto",
            backgroundColor: "#f3f3f3",
            fontSize: "25px"
          }}
        >
          About page
        </div>
      </div>
    );
  }
}

export default AboutComponent;
