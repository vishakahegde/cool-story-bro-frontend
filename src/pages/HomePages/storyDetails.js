import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePage from "../../components/HomePage/homePage";
import { Container } from "react-bootstrap";
import StoryCarousel from "../../components/HomePage/storyCarousel";
import { fetchPageDetails } from "../../store/homePageDetails/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPageDetails } from "../../store/homePageDetails/selectors";
import Loading from "../../components/Loading";

export default function StoryDetails() {
  const { id } = useParams();
  const page = useSelector(selectPageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageDetails(id));
  }, [dispatch, id]);

  if (page.stories === null) {
    return <Loading />;
  }

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
      <Container>
        <StoryCarousel page={page} />
      </Container>
    </div>
  );
}
