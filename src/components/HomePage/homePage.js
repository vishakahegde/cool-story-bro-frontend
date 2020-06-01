import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <Jumbotron
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.showLink ? (
        <Link to={`/homepages/${props.id}`}>
          <button>Visit Page</button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
