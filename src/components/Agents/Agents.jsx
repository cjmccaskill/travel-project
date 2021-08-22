import React from "react";
import "./Agents.scss";

const Agents = (props) => {
  console.log("Agents props -", props);
  const { agents } = props;
  return (
    <div className="agent-container">
      {agents.map((agent) => (
        <div key={agent._id}>
          <img src={agent.img} alt={agent.name} />
          <div>{agent.name}</div>
          <div>{agent.contactInfo[0]}</div>
        </div>
      ))}
    </div>
  );
};

export default Agents;
