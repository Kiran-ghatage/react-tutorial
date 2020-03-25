import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-bootstrap/Carousel";

import AppBarComponent from "../../../common/AppbarComponent";
import CarouselComponent from "../../../common/CarouselComponent";
import LogoComponent from "../../../common/LogoComponent";

const imageStyle = { objectFit: "contain", width: "100%", padding: "10px" };
const aboutHeaderStyle = { fontSize: "24px", color: "#3e51b5" };
const aboutTextStyle = { fontSize: "16px", color: "#444444" };

const logoUrl =
  "https://images.pexels.com/photos/722218/pexels-photo-722218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const CarouselItems = [
  {
    imgSrc:
      "https://images.pexels.com/photos/959813/pexels-photo-959813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "caroucelImg1",
    caption: "First slide label",
    deatis: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1092063/pexels-photo-1092063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "caroucelImg1",
    caption: "Second slide label",
    deatis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];
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
