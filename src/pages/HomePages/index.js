import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import HomePage from "../../components/HomePage/homePage";

export default function HomePages() {
  const [homePages, setHomePages] = useState([]);

  async function getHomePages() {
    const res = await axios.get(`${apiUrl}/homepages`);
    console.log("Response:", res.data);
    setHomePages(res.data);
  }

  useEffect(() => {
    getHomePages();
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1>Homepages</h1>
      </Jumbotron>
      {homePages.map((page) => {
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
      })}
    </div>
  );
}
