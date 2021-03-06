import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import AppBarComponent from "../../../common/AppbarComponent";
import CardComponent from "../../../common/CardComponent";

class AboutComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppBarComponent />
        <div className="row" style={{ margin: "20px" }}>
          <h1>About React Tutorial</h1>
          We will build a small game during this tutorial. You might be tempted
          to skip it because you’re not building games — but give it a chance.
          The techniques you’ll learn in the tutorial are fundamental to
          building any React app, and mastering it will give you a deep
          understanding of Reac
        </div>
      </div>
    );
  }
}

export default AboutComponent;
