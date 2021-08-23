import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedAgents.scss";

const FeaturedAgents = (props) => {
  const { agents } = props;
  return (
    <div className="agent-container">
      {agents.map((agent) => (
        <div className="agent-card" key={agent._id}>
          <Link to={`/agent/${agent._id}`}>
            <img src={agent.img} alt={agent.name} />
            <div>{agent.name}</div>
            <div>More Info</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedAgents;