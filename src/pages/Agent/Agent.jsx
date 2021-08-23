import React from "react";
import { useState, useEffect } from "react";
import "./Agent.scss";
import { FaPaperPlane, FaGithub, FaGlobeAmericas } from "react-icons/fa";

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
          <FaPaperPlane {...agent.contactInfo} />
          <FaGithub {...agent.contactInfo} />
          <FaGlobeAmericas {...agent.contactInfo} />
        </div>
      </div>
    </div>
  );
};

export default Agent;
