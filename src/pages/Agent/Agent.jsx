import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./Agent.scss";
import { FaPaperPlane, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";

const Agent = (props) => {
  const url = `https://act-travel-project-api.herokuapp.com/agent/${props.match.params.id}`;

  const [agent, setAgent] = useState({});

  const getAgents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAgent(data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="agent-container">
      <div className="agent-card" key={""}>
        <img src={agent.img} alt={agent.name} />
        <div>{agent.name}</div>
        <div>{agent.packages}</div>
        <div>{agent.bio}</div>
        <div>
          <Route path={agent.email}>
            <FaPaperPlane />
          </Route>
          <Route path={agent.linkedIn}>
            <FaLinkedin />
          </Route>
          <Route path={agent.website}>
            <FaGlobeAmericas />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Agent;
