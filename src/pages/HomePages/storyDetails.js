import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import HomePage from "../../components/HomePage/homePage";
import { Container } from "react-bootstrap";
import StoryCarousel from "../../components/HomePage/storyCarousel";
import { fetchPageDetails } from "../../store/homePageDetails/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPageDetails } from "../../store/homePageDetails/selectors";

export default function StoryDetails() {
  const { id } = useParams();
  const page = useSelector(selectPageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageDetails(id));
  }, [dispatch, id]);

  console.log("Page in story details", page);

  return (
    <div>
      <HomePage
        title={page.title}
        key={page.id}
        description={page.description}
        id={page.id}
        backgroundColor={page.backgroundColor}
        color={page.color}
        showLink={false}
      />

      <StoryCarousel page={page} />
    </div>
  );
}
