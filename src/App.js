import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePages from "./pages/HomePages";
import MyHomepage from "./pages/MyHomepage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
// import { Jumbotron } from "react-bootstrap";
import StoryDetails from "./pages/HomePages/storyDetails";

// const Home = () => (
//   <Jumbotron>
//     <h1>Homepages</h1>
//   </Jumbotron>
// );
// const Other = () => (
//   <Jumbotron>
//     <h1>Other</h1>
//   </Jumbotron>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route path="/homepages/:id" component={StoryDetails} />
        <Route path="/myhomepage" component={MyHomepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
