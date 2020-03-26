import React from "react";
import Carousel from "react-bootstrap/Carousel";
import lodash from "lodash";

const CarouselComponent = props => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}
    fade={false}
    controls={false}
    >
      {props.items.map((item, index) => (
        <Carousel.Item>
          <img className="d-block w-100" height="600px" src={item.imgSrc} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>{item.deatis}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
