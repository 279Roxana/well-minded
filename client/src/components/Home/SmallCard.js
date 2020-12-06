import React from "react";
import "../../css/smallCard.css";
import { Card} from "react-bootstrap";

const SmallCard = (props) => {
  return (
    <Card className="small-card shadow-lg 5 bg-white rounded border-0">
      <Card.Img variant="top" src={props.src} alt={props.alt} />
      <Card.Body>
        <Card.Link href={props.link}>{props.linkcap}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SmallCard;
