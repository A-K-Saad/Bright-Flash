import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { useState } from "react";
import Users from "./components/Users/Users";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedUser = localStorage.getItem("loggedUser");
  const data = localStorage.getItem("data");

  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup">
            {loggedUser ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/login">
            {loggedIn || loggedUser ? (
              <Redirect to="/" />
            ) : (
              <Login setLoggedIn={setLoggedIn} />
            )}
          </Route>
          {/* <Route exact path="/">
            <Something/>
          </Route> */}
          <Route path="/profile">
            {loggedUser ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            {loggedUser ? <Home setLoggedIn={setLoggedIn} /> : <Intro />}
          </Route>
          <Route exact path="/users">
            {loggedUser ? (
              <Users setLoggedIn={setLoggedIn} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
