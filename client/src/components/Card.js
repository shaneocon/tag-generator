import Card from "react-bootstrap/Card";
import React from "react";

function CardResult(props) {
  return (
    <Card className="htmlGenerator">
      <Card.Body className="htmlBody">
        <Card.Title className="htmlTitle">
          {props.name}
        </Card.Title>
        <Card.Text className="htmlText">
          {props.url}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CardResult;
