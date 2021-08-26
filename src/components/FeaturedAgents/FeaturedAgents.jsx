import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./FeaturedAgents.scss";

const FeaturedAgents = (props) => {
  const { agents } = props;
  return (
    <>
      <div className="featured-agents-header">
        <h1>Travel Agents</h1>
        <Link to="/agents" className="featured-see-agents">
          See All
        </Link>
      </div>
      <div className="featured-card-container">
        {agents.map((agent) => (
          <div className="featured-agent-container" key={agent._id}>
            <Link className="featured-agent-card" to={`/agent/${agent._id}`}>
              <img
                src={agent.img}
                alt={agent.name}
                className="featured-agent-img"
              />
              <div className="featued-card-info">
                <h3 className="featured-agent-name">{agent.name}</h3>
                <div className="fa-rating">
                  <AiFillStar className="fa-star" />
                  <p>5.0</p>
                </div>
                <div className="featured-more-info">More Info</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedAgents;
