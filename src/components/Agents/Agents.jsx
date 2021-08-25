import React from "react";
import { FaPaperPlane, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import "./Agents.scss";

const Agents = (props) => {
  const { agents } = props;

  return (
    <div className="agents-container">
      {agents.map((agent) => (
        <div className="agents-card" key={agent._id}>
          <img className="agents-img" src={agent.img} alt={agent.name} />
          <div className="agents-name">{agent.name}</div>
          <div className="agents-featured-pkg">
            <strong>Featured Package: </strong>
            <span>{agent.packages[0].packageName}</span>
            {
              <img
                src={agent.packages[0].img}
                alt={agent.packages[0].packageName}
              />
            }
          </div>
          <div className="agents-bio">{agent.bio}</div>
          <div className="agents-links">
            <a href={`mailto:${agent.email}`} target="_blank">
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
      ))}
    </div>
  );
};

export default Agents;
