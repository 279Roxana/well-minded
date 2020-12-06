import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = ({ setIsAdmin }) => {
  const history = useHistory();
  const [loginError, setLoginError] = useState(null);

  const [superAdmin, setSuperAdmin] = useState({
    email: "admin@email.com",
    password: "12345",
  });
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const submitLogin = (event) => {
    event.preventDefault();
    if (
      admin.email === superAdmin.email &&
      admin.password === superAdmin.password
    ) {
      setIsAdmin(true);
      window.localStorage.setItem("isAdmin", true);
      history.push("/");
    } else if (
      admin.email === superAdmin.email &&
      admin.password !== superAdmin.password
    ) {
      setLoginError("wrong password");
    } else {
      setLoginError("check your password or email");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Container className="login">
      <Row className="p-3">
        <Col>
          <h1 className="text-center m-2">Login Page</h1>
        </Col>
      </Row>

      <Row className="p-3">
        <Col />
        <Col>
          <Form
            className="mt-3 mb-3 bg-transparent"
            style={{ borderRadius: "5px" }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter email"
                value={admin.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                value={admin.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              onClick={(e) => {
                submitLogin(e);
              }}
              type="submit"
              variant="primary"
            >
              login
            </Button>
            {loginError && (
              <div className="bg-danger text-white m-3 p-3 text-center h6">
                {loginError}
              </div>
            )}
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};
export default Login;
