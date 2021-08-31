import React from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import "./Agents.scss";

const Agents = (props) => {
  const { agents } = props;

  return (
    <>
      <h1 className="agent-pg-title">Agents</h1>
      <div className="agents-container">
        {agents.map((agent) => (
          <div className="agents-card" key={agent._id}>
            <Link to={`/agent/${agent._id}`} className="agents-card">
              <img className="agents-img" src={agent.img} alt={agent.name} />
              <h2 className="agents-name">{agent.name}</h2>
              <div className="agents-featured-pkg">
                <strong>Featured Package: </strong>
                {
                  <img
                    src={agent.packages[0].img}
                    alt={agent.packages[0].packageName}
                  />
                }
                <span>{agent.packages[0].packageName}</span>
              </div>
              <div className="agents-bio">{agent.bio}</div>
            </Link>
            <div className="agents-links">
              <a href={`mailto:${agent.email}`} target="_blank">
                <FaPaperPlane className="agent-links" />
              </a>
              <a href={agent.linkedIn}>
                <FaLinkedin className="agent-links" />
              </a>
              <a href={agent.website}>
                <FaGlobeAmericas className="agent-links" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agents;
