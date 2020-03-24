import React from "react";
import AppBarComponent from "../../../common/AppbarComponent";

class DashboardComponent extends React.Component {
  render() {
    return (
      <div>
        <AppBarComponent />
        <div className="row" style={{ margin: "20px" }}>
          <h1>Dashboard</h1>
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
export default DashboardComponent;
