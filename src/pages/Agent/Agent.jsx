import React from "react";
import { useState, useEffect } from "react";
import "./Agent.scss";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiBookmark2Line } from "react-icons/ri";

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
    <div>
      <h1 className="agent-profile-header">Agent Profile</h1>
      <div className="agent-profile-container">
        <div className="agent-profile-card" key={""}>
          <img src={agent.img} alt={agent.name} />
          <h2 className="agent-profile-name">{agent.name}</h2>
          <div className="agent-profile-stats">
            <div className="agent-profile-rating">
              <AiFillStar className="agent-profile-star" />
              <p>4.9</p>
            </div>
            <div className="agent-profile-bookmark-stats">
              <RiBookmark2Line className="agent-profile-bookmark" />
              <p>142</p>
            </div>
          </div>

          <div className="agent-profile-featured-pkg">
            <h2>Available Packages: </h2>
            {
              <img
                src={agent.packages?.[0].img}
                alt={agent.packages?.[0].packageName}
              />
            }
            <span>{agent.packages?.[0].packageName}</span>
          </div>
          <div className="agent-profile-bio">
            <p>About</p>
            {agent.bio}
          </div>
          <div className="agent-profile-email-agent">
            <a href={agent.email}>
              <FaPaperPlane className="plane" />
              <span>Chat with us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
