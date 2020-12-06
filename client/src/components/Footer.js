import React from "react";
import { SocialIcon } from "react-social-icons";
import "../css/footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = ({ isAdmin, logout }) => {
  return (
    <>
      {/* // <Container className="footer font-small pt-4 mt-4 text-center" style={{width:"100%"}}> */}
      <Row className=" footer font-small pt-4 mt-4 text-center footer-link text-center">
        <Col className="text-center footer-footlink">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/organisations">Organisations</Link>
          </p>
          <p>
            <Link to="/resources">Resources</Link>
          </p>
        </Col>
        <Col className="text-center footer-footlink">
          <p>
            {isAdmin ? (
              <Link
                onClick={() => {
                  logout();
                }}
              >
                logout
              </Link>
            ) : (
              <Link to="/login">login</Link>
            )}
          </p>
          <p>
            <Link to="/contact">Contact </Link>
          </p>
          <p>
            {" "}
            <SocialIcon url="http://twitter.com" />
            <SocialIcon className="ml-2 mr-2" url="http://facebook.com" />
            <SocialIcon className="mr-2" url="http://google.com" />
            <SocialIcon url="http://linkedin.com" />
          </p>
        </Col>
      </Row>

      <Row className="footer footer-copyright font-small text-center p-2">
        <Col>
          <p>© 2020 CYF - Well-minded - ldn class 6 </p>
        </Col>
      </Row>

      {/* // </Container> */}
    </>
  );
};
export default Footer;
