import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css";


function MovieCard(props) {
  return (
    <Card style={{ width: "16rem" }} className="card-cont">
      <Card.Img variant="top" src={props.img} className="card-img" />
      {
      
      props.rate ? <h6 className="card-rate">{props.rate}</h6> : null 
      }

      <Card.Body className="card-cont">
  <Card.Title className="card-titles">{props.title}</Card.Title>
        <Card.Text className="card-texts">
          {props.text}
        </Card.Text>

        
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
