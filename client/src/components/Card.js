import React from "react";
import Card from "react-bootstrap/Card";
function CardResult(props) {
  console.log(props);
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