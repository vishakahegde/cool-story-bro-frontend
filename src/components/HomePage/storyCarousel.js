import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";

export default function StoryCarousel(props) {
  console.log("Props", props);
  return (
    <div>
      <h1>{props.page.title}</h1>
      {/* {props.page.stories.map((story) => {
        return <p>{story.title}</p>;
      })} */}
    </div>
  );
}
