import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Agents from "./components/Agents/Agents";
import Packages from "./components/Packages/Packages";
import Home from "./pages/Home/Home";

function App() {
  const url = "https://act-travel-project-api.herokuapp.com/";

  // Call the TripDetails API
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    const response = await fetch(url + "/tripDetails");
    const data = await response.json();
    setPackage(data);
  };

  useEffect(() => {
    getPackages;
  }, []);

  // Call to Agents API
  const [agents, setAgents] = useState([]);

  const getAgents = async () => {
    const response = await fetch(url + "/agents");
    const data = await response.json();
    setAgents(data);
  };

  useEffect(() => {
    getAgents;
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home packages={packages} agents={agents} />
          </Route>
          <Route
            exact
            path="/tripDetails/:id"
            render={(rp) => <Packages {...rp} selectPackage={selectPackage} />}
          />
          <Route
            exact
            path="/agent/:id"
            render={(rp) => <Agents {...rp} selectAgent={selectAgent} />}
          />
          <Route exact path="/user" render={(rp) => <UserProfile {...rp} />} />
          <Route
            exact
            path="/user/Login"
            render={(rp) => <UserLogin {...rp} />}
          />
          <Route
            exact
            path="/user/SignUp"
            render={(rp) => <UserLogin {...rp} />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
