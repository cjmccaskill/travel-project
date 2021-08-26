import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { GlobalCtx } from "../../App";
import "./UserProfile.scss";

const UserProfile = (props) => {
  const { gState, setGState } = React.useContext(GlobalCtx)  

  const returnHome = (
    <button className="home" onClick={() => {
      props.history.push("/")
    }}>Return Home</button>
  )

  const logout = (
    <Link>
      <button className="logout" onClick={() => {
        window.localStorage.removeItem("token")
        setGState({...gState, token: null})
        props.history.push("/")
      }}>Logout</button>
    </Link>
  )

  return (
    <div className="profilebuttons">
      {returnHome}
      {gState.token ? logout : null}
    </div>
  )
};

export default UserProfile;
