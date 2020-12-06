import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import domain from "../../config";
import { Button, FormControl,InputGroup,Form,Col,Row} from "react-bootstrap";

const ResourceEdRe = ({ 
  resource, 
  removeResourceById, 
  updateResource,
  isAdmin }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addName, setAddName] = useState(resource.name);
  const [addDescription, setAddDescription] = useState(resource.description);
  const [addWebsite, setAddWebsite] = useState(resource.website);

  const newBody = {
    name: addName,
    description: addDescription,
    website: addWebsite,
  };

  const handlerRemove = () => {
    if (window.confirm(`Are you sure you want to remove '${resource.name}'?`)) {
      fetch(`${domain}/api/resources/${resource._id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          removeResourceById(resource._id);
        } else {
          window.alert(`fail delete: ${resource.name}`);
        }
      });
    }
  };

  const handleUpdate = () => {
    const body = JSON.stringify(newBody);

    fetch(`${domain}/api/resources/${resource._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        updateResource(data.resource);
        handleClose();
      });
  };

  return (
    <div>
      {isAdmin && (
        <>
          <Button variant="primary" onClick={handleShow} className="mr-2">
            edit
          </Button>
          <Button variant="danger" onClick={handlerRemove}>
            remove
          </Button>
        </>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2> Update Resource</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={addName}
              onChange={(e) => {
                setAddName(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Website link</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={addWebsite}
              onChange={(e) => {
                setAddWebsite(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className=" mb-3">
            <InputGroup.Text fluid>Description:</InputGroup.Text>

            <FormControl
              fluid
              as="textarea"
              rows="5"
              value={addDescription}
              onChange={(e) => {
                setAddDescription(e.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResourceEdRe;
