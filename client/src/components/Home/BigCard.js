import React from "react";
import {Card} from "react-bootstrap";
import '../../css/bigcard.css'

const BigCard = ({ title, text }) => {
  return (
    <Card className="border-0">
      <Card.Header as="h2">{title}</Card.Header>
      <Card.Body >
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BigCard;
