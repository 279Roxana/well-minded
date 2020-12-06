import React, { useState } from "react";
import Messages from "./ContactAdmin";
import { Container, Row, Col, Button } from "react-bootstrap";
import ResourceAddForm from "../Resource/ResourceAddForm";
import OrganisationAddForm from "../Organisation/OrganisationAddForm";
import "../../css/admin.css"

const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
  contactMessages,
  setContactMessages,
  isAdmin,
}) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showAddOrg,setShowAddOrg] = useState(false);
  const addResource = (resource) => {
    setResources([resource, ...resources]);
  };

  return (
    <Container className="admin">
      <Row>
        <Col className="text-center">
          <h1 className="mt-3">Admin page</h1>
        </Col>
      </Row>
      {isAdmin && (
        <>
          <Row className="mt-5">
            <Col className=" text-center ">
              <button
                className="btn-nextlink mr-5"
                onClick={() => {
                  setShowAdd(true);
                }}
              >
                add resource
              </button>
              <button
                className="btn-nextlink mb-3 "
                onClick={() => {
                  setShowAddOrg(true);
                }}
              >
                add organisation
              </button>

              {showAdd && (
                <ResourceAddForm
                  setShowAdd={setShowAdd}
                  resources={resources}
                  addResource={addResource}
                />
              )}
              {showAddOrg && (
                <OrganisationAddForm 
                setShowAddOrg={setShowAddOrg} />
              )}
            </Col>
            
          </Row>
          <Row>
            <Col>
              <Messages
                contactMessages={contactMessages}
                setContactMessages={setContactMessages}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default AdminArea;
