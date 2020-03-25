import React from "react";

import DailogBoxComponent from "./DailogBoxComponent";

const AlertComponent = props => {
  return (
    <div>
      <DailogBoxComponent
        open={props.open}
        dailogBoxText={props.dailogBoxText}
        dailogBoxTitle={props.dailogBoxTitle}
        onDailogBoxClose={props.onDailogBoxClose}
        dailogBoxActions={props.alertActions}
      />{" "}
    </div>
  );
};

export default AlertComponent;
