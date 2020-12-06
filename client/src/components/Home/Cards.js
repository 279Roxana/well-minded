import React from "react";
import SmallCard from "./SmallCard";
import imageSix from "../../images/image 6.jpg";
import imageFive from "../../images/image 5.jpg";
import imageFour from "../../images/image 4.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  const colClassess = {
    lg: 3,
    xl: 3,
    md: 4,
    sm: 12,
  };
  return (
    
      <Container className=" p-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col {...colClassess}>
            <SmallCard
              src={imageSix}
              alt="Card image cap"
              link="https://www.mind.org.uk/information-support/coronavirus/coronavirus-and-your-wellbeing/"
              linkcap="Mental health during pandemic"
            />
          </Col>
          <Col {...colClassess}>
            <SmallCard
              src={imageFive}
              alt="Card image cap"
              link=""
              linkcap="Mental Health Blogs"
            />
          </Col>
          <Col {...colClassess}>
            <SmallCard
              src={imageFour}
              alt="Card image cap"
              link="https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"
              linkcap="Where to get urgent help"
            />
          </Col>
        </Row>
      </Container>
   
  );
};

export default Cards;
