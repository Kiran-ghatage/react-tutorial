import React from "react";

function DashboardCardComponent(props) {
  return (
    <div>
      <p style={props.titleStyle}>{props.title}</p>
    </div>
  );
}
export default DashboardCardComponent;
