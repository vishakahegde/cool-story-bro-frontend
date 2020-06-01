import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import HomePage from "../../components/HomePage/homePage";
import Loading from "../../components/Loading";
import StoryCarousel from "../../components/HomePage/storyCarousel";
import { Container } from "react-bootstrap";

export default function MyHomepage() {
  const { homePage } = useSelector(selectUser);
  // console.log("My Homepage user", user);
  // const homepage = user.homePage;
  console.log("My Homepage homepage", homePage);
  if (homePage === null) {
    return <Loading />;
  }
  return (
    <div>
      <HomePage
        title={homePage.title}
        key={homePage.id}
        description={homePage.description}
        id={homePage.id}
        backgroundColor={homePage.backgroundColor}
        color={homePage.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel page={homePage} />
      </Container>
    </div>
  );
}
