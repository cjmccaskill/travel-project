import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedAgents.scss";

const FeaturedAgents = (props) => {
  const { agents } = props;
  return (
    <>
      <div className="agents-header">
        <h1>Travel Agents</h1>
        <Link to="/agent" className="see-agents">
          See All
        </Link>
      </div>
      <div className="card-container">
        {agents.map((agent) => (
          <div className="agent-container" key={agent._id}>
            <Link className="agent-card" to={`/agent/${agent._id}`}>
              <img src={agent.img} alt={agent.name} className="agent-img" />
              <div className="card-info">
                <div className="agent-name">{agent.name}</div>
                <div className="more-info">More Info</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedAgents;
