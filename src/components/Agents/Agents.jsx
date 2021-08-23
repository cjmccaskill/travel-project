import React from "react";
import { FaPaperPlane, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import "./Agents.scss";

const Agents = (props) => {
  const { agents } = props;
  return (
    <div className="agent-container">
      {agents.map((agent) => (
        <div className="agent-card" key={agent._id}>
          <img src={agent.img} alt={agent.name} />
          <div>{agent.name}</div>
          <div>{agent.packages}</div>
          <div>{agent.bio}</div>
          <div>
            <FaPaperPlane {...agent.email} />
            <FaLinkedin {...agent.linkedIn} />
            <FaGlobeAmericas {...agent.website} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agents;
