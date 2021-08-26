import React from "react";
import { useState, useEffect } from "react";
import "./Agent.scss";
import { FaPaperPlane, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";

const Agent = (props) => {
  console.log("PROPS", props);
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

  console.log("agent data", agent);
  return (
    <div className="agent-container">
      <div className="agent-card" key={""}>
        <img src={agent.img} alt={agent.name} />
        <div>{agent.name}</div>
        <div>{agent.packages[0].packageName}</div>
        <div>{agent.bio}</div>
        <div>
          <a href={agent.email}>
            <FaPaperPlane />
          </a>
          <a href={agent.linkedIn}>
            <FaLinkedin />
          </a>
          <a href={agent.website}>
            <FaGlobeAmericas />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Agent;
