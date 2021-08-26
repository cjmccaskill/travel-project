import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Packages from "./components/Packages/Packages";
import Home from "./pages/Home/Home";
import Agent from "./pages/Agent/Agent";
import Agents from "./components/Agents/Agents";
import UserLogin from "./components/UserLogin/UserLogin";
import SignUp from "./pages/SignUp/SignUp";
export const GlobalCtx = React.createContext(null);
import TripDetails from "./pages/TripDetails/TripDetails";

function App() {
  const url = "https://act-travel-project-api.herokuapp.com";

  //State for Auth token
  const [gState, setGState] = useState({
    url: "https://act-travel-project-api.herokuapp.com",
    token: null,
  });

  //Confirming Login
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    console.log(token);
    if (token) {
      setGState({ ...gState, token: token.token });
    }
  }, []);

  // Call the TripDetails API
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    const response = await fetch(url + "/tripdetails");
    const data = await response.json();
    setPackages(data);
  };

  useEffect(() => {
    getPackages();
  }, []);

  // Call to Agents API
  const [agents, setAgents] = useState([]);

  const getAgents = async () => {
    const response = await fetch(url + "/agent");
    const data = await response.json();
    setAgents(data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  // Call to Users API
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url + "/user");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);


  const handleSubmit = async (packageName) => {
    console.log("Hnadle submit for trip details", packageName)
    const response = await fetch(url + '/tripdetails/' + _id)
    const data = await response.json()
    setPackages(data)
  }


  

  return (
    <GlobalCtx.Provider value={{ gState, setGState }}>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home handleSubmit={handleSubmit} packages={packages} agents={agents} />
            </Route>
            <Route exact path="/agents">
              <Agents agents={agents} />
            </Route>
            <Route exact path="/tripdetails">
              <Packages packages={packages} />
            </Route>
            <Route
              exact
              path="/tripdetails/:id"
              render={(rp) => <TripDetails {...rp} />}
            />
            <Route exact path="/agent/:id" render={(rp) => <Agent {...rp} />} />
            <Route
              exact
              path="/user"
              render={(rp) => <UserProfile {...rp} />}
            />
            <Route
              exact
              path="/user/login"
              render={(rp) => <UserLogin {...rp} />}
            />
            <Route
              exact
              path="/user/signup"
              render={(rp) => <SignUp {...rp} />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
