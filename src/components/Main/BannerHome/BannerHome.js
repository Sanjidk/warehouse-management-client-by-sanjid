import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import apple from "../../../img/carousel/apple.png";
import dell from "../../../img/carousel/dell.png";
import hp from "../../../img/carousel/hp.png";

const BannerHome = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={apple} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-dark">APPLE BRAND</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dell} alt="Second slide" />
            <Carousel.Caption>
              <h3 className="text-end text-dark">DELL BRAND</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hp} alt="Third slide" />
            <Carousel.Caption>
              <h3 className=" text-start text-dark">HP BRAND</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerHome;
