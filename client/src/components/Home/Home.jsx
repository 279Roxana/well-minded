import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../css/home.css";

const Home = () => {
  return (
    <>
      <Container className="home-page d-flex flex-column justify-content-around">
        <Row>
          <Col className="text-center">
            <h1 className="mt-3">Well minded</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center ">
            <p className="h5">
              Bring people and organisations together for free support and
              mental health resources
            </p>
          </Col>
        </Row>
        <Row>
          <Col className=" button-holder">
            <Link className="org-btn col-3" to="/organisations">
              Find Organisations
            </Link>
            <Link className="org-btn col-3" to="/resources">
              View Resources
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
