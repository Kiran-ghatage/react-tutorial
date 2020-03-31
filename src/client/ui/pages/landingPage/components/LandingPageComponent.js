import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-bootstrap/Carousel";

import AppBarComponent from "../../../common/AppbarComponent";
import CarouselComponent from "../../../common/CarouselComponent";
import LogoComponent from "../../../common/LogoComponent";
import LOCALIZED_STRINGS from "../constants/landingPageConstatnts";
import {
  imageStyle,
  aboutHeaderStyle,
  aboutTextStyle
} from "../styles/landingPageComponentStyles";

const logoUrl =
  "https://images.pexels.com/photos/3877443/pexels-photo-3877443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const CarouselItems = LOCALIZED_STRINGS.CarouselItems;
class LandingPageComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getCarouselItemView = item => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={item.imgSrc} alt={item.alt} />
        <Carousel.Caption>
          <h3>{item.caption}</h3>
          <p>{item.deatis}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };
  render() {
    return (
      <div>
        <AppBarComponent
          menuItemsView={<LogoComponent />}
          color="transparent"
          appBarStyle={{ position: "fixed", boxShadow: "none" }}
          LogOutTextStyle={{color: "#FFFFFF"}}
          LogInTextStyle={{color: "#FFFFFF"}}
        />
        <CarouselComponent
          items={CarouselItems}
          // getCarouselItemView={this.getCarouselItemView}
        />
        <div className="row" style={{ padding: "10px", marginTop: "50px" }}>
          <div
            className="col-lg-6 col-md-8 col-sm-12 col-xs-12"
            // style={{ background: "#ececec" }}
          >
            <img src={logoUrl} alt={"logo"} style={imageStyle} />
          </div>
          <div
            className="col-lg-6 col-md-8 col-sm-12 col-xs-12"
            // style={{ background: "#ececec" }}
          >
            <p style={aboutHeaderStyle}>About</p>
            <p style={aboutTextStyle}>
              {" "}
              We will build a small game during this tutorial. You might be
              tempted to skip it because you’re not building games — but give it
              a chance. The techniques you’ll learn in the tutorial are
              fundamental to building any React app, and mastering it will give
              you a deep understanding of Reac We will build a small game during
              this tutorial. You might be tempted to skip it because you’re not
              building games — but give it a chance. The techniques you’ll learn
              in the tutorial are fundamental to building any React app, and
              mastering it will give you a deep understanding of Reac We will
              build a small game during this tutorial. You might be tempted to
              skip it because you’re not building games — but give it a chance.
              The techniques you’ll learn in the tutorial are fundamental to
              building any React app, and mastering it will give you a deep
              understanding of Reac We will build a small game during this
              tutorial. You might be tempted to skip it because you’re not
              building games — but give it a chance. The techniques you’ll learn
              in the tutorial are fundamental to building any React app, and
              mastering it will give you a deep understanding of Reac We will
              build a small game during this tutorial. You might be tempted to
              skip it because you’re not building games — but give it a chance.
              The techniques you’ll learn in the tutorial are fundamental to
              building any React app, and mastering it will give you a deep
              understanding of Reac We will build a small game during this
              tutorial. You might be tempted to skip it because you’re not
              building games — but give it a chance. The techniques you’ll learn
              in the tutorial are fundamental to building any React app, and
              mastering it will give
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageComponent;
