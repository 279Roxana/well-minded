import React, { useState } from "react";
import domain from "../../config";
import "../../css/organisationAddForm.css";
import { Button, Col, Row, Form } from "react-bootstrap";

const OrganisationAddForm = ({ setShowAddOrg }) => {
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNewOrg = () => {
    const body = JSON.stringify({
      logo,
      name,
      category,
      website,
      location,
      description,
    });
    fetch(`${domain}/api/organisations/org`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };
  return (
    <Form className="p-3 org-add-form " onSubmit={handleAddNewOrg}>
      <Form.Row className="p-3">
        <Col>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </Col>
      </Form.Row>
      <Form.Row className="p-3">
        <Col>
          <Form.Control
            className="org-add-form-description"
            as="textarea"
            rows="4"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Col>
      </Form.Row>
      <Form.Row className="p-3">
        <Col>
          <Form.Control
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Website"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </Col>
      </Form.Row>
      <Form.Row className="p-3 org-add-form-logo">
        <Col>
          <Form.Control
            type="text"
            name="logo"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            placeholder="Logo"
          />
        </Col>
      </Form.Row>
      <Form.Row className="p-3 justify-content-center">
        <Col>
          <Button className="add-form-btn" type="submit" variant="primary" size="lg" block>
            Add Organisation
          </Button>
        </Col>
        <Col>
          <Button
            className="add-form-btn"
            variant="secondary"
            size="lg"
            block
            onClick={() => {
              setShowAddOrg(false);
            }}
          >
            Cancel
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
export default OrganisationAddForm;
