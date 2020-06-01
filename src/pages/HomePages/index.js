import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
// import { apiUrl } from "../../config/constants";
// import axios from "axios";
import HomePage from "../../components/HomePage/homePage";
import { fetchHomePages } from "../../store/homePages/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectHomePages } from "../../store/homePages/selectors";
import Loading from "../../components/Loading";

export default function HomePages() {
  //const [homePages, setHomePages] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(selectAppLoading);
  const homePages = useSelector(selectHomePages);
  console.log("Loading:", loading);

  // async function getHomePages() {
  //   const res = await axios.get(`${apiUrl}/homepages`);
  //   console.log("Response:", res.data);
  //   setHomePages(res.data);
  // }

  useEffect(() => {
    dispatch(fetchHomePages());
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1>Homepages</h1>
      </Jumbotron>
      {loading === true ? (
        <Loading />
      ) : (
        homePages.map((page) => {
          return (
            <HomePage
              title={page.title}
              key={page.id}
              description={page.description}
              id={page.id}
              backgroundColor={page.backgroundColor}
              color={page.color}
              showLink={true}
            />
          );
        })
      )}
      {/* {homePages.map((page) => {
        return (
          <HomePage
            title={page.title}
            key={page.id}
            description={page.description}
            id={page.id}
            backgroundColor={page.backgroundColor}
            color={page.color}
          />
        );
      })} */}
    </div>
  );
}
