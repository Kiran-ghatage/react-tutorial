import React from "react";

const LogoComponent = props => {
  const logoStyle = {
    float: "left",
    margin: "0px 20px"
  };
  const imageStyle = { objectFit: "contain", cursor: "pointer", color: "#FFFFFF" };
  const textStyle = { fontSize: "24px", fontWeight: 700, cursor: "pointer", color: "#FFFFFF" };
  const logoUrl =
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";

  const navigateToLandingPage = () => {
    window.location = "/";
  };
  return (
    <div style={{ width: "97%" }}>
      <div style={logoStyle}>
        <img
          src={logoUrl}
          alt={"logo"}
          height="40px"
          style={imageStyle}
          onClick={navigateToLandingPage}
        />
      </div>
      <div style={{ padding: "0px 5px" }}>
        <p style={textStyle} onClick={navigateToLandingPage}>
          React Tutorial
        </p>
      </div>
    </div>
  );
};

export default LogoComponent;
