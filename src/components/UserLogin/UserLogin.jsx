import React from "react";
import { Link } from "react-router-dom"
import { GlobalCtx } from "../../App";
import "./UserLogin.scss";

const UserLogin = (props) => {

  const { gState, setGState } = React.useContext(GlobalCtx)
  
  const { url } = gState
  
  const blank = {
    username: "",
    password: "",
  }

  const [form, setForm] = React.useState(blank)

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = form
  
    fetch(`${url}/user/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        window.localStorage.setItem("token", JSON.stringify(data))
        setGState({ ...gState, token: data.token })
        setForm(blank)
        props.history.push("/")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
         <input
          type="submit"
          value="Login"
        />
      </form>
      <Link to="/user/signup">Sign Up!</Link>
    </div>
  )
};

export default UserLogin;