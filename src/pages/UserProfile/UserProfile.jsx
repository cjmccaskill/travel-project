import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { GlobalCtx } from "../../App";
import "./UserProfile.scss";

const UserProfile = (props) => {
  const { gState, setGState } = React.useContext(GlobalCtx)  

  const returnHome = (
    <button onClick={() => {
      props.history.push("/")
    }}>Return Home</button>
  )

  const logout = (
    <Link>
      <button onClick={() => {
        window.localStorage.removeItem("token")
        setGState({...gState, token: null})
        props.history.push("/")
      }}>Logout</button>
    </Link>
  )

  return (
    <div>
      {returnHome}
      {gState.token ? logout : null}
    </div>
  )
};

export default UserProfile;
