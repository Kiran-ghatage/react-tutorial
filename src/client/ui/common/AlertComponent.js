import React from "react";

import DailogBoxComponent from "./DailogBoxComponent";

const AlertComponent = props => {
  return (
    <div>
      <DailogBoxComponent
        open={props.open}
        dailogBoxText={props.dailogBoxText}
        onDailogBoxClose={props.onDailogBoxClose}
      />{" "}
    </div>
  );
};

export default AlertComponent;
