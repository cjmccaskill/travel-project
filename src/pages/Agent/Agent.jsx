import React from "react";
import { useState, useEffect } from "react";
import "./Agent.scss";
import { FaPaperPlane, FaGithub, FaGlobeAmericas } from "react-icons/fa";

const Agent = (props) => {
  console.log("The selected agent", props);
  const url = `http://localhost:4500/agent/${props.match.params.id}`;
  const [agent, setAgent] = useState({});

  const getAgents = async () => {
    const response = await fetch(url);
    const data = response.json();
    setAgent(data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="agent-container">
      <div className="agent-card" key={agent._id}>
        <div>Hello I am here{agent.name}</div>
        {/* <img src={agent.img} alt={agent.name} /> */}
        {/* <div>{agent.name}</div> */}
        {/* <div>{agent.packages}</div>
          <div>{agent.bio}</div>
          <div>
            <FaPaperPlane {...agent.contactInfo[0]} />
            <FaGithub {...agent.contactInfo[1]} />
            <FaGlobeAmericas {...agent.contactInfo[2]} />
          </div> */}
      </div>
    </div>
  );
};

export default Agent;
