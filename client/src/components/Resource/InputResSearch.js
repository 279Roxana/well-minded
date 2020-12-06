import React from "react";
import { Form } from "react-bootstrap";

function InputResSearch({ searchResource, setSearchResource }) {
  return (
    <Form.Control
        placeholder="Search Resource"
        value={searchResource}
        onChange={(e) => {
          setSearchResource(e.target.value);
        }}
      />
  );
}
export default InputResSearch;
