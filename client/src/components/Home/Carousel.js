import React, { useState } from "react";
import "../../css/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import imageOne from "../../images/image-13.jpg";
import imageTwo from "../../images/image 2.jpg";
import imageThree from "../../images/image 3.jpg";
import { Container, Row,Col } from "react-bootstrap";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-holder p-5">
      <Container>
        <Row className="carousel-header">
          <Col>
            <h1>well-minded</h1>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image src={imageOne} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={imageTwo} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={imageThree} fluid />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default ControlledCarousel;
