import React from "react";
import "./SignUp.scss";

const SignUp = (props) => {
  const url = `https://act-travel-project-api.herokuapp.com`;

  const blank = {
    fullName: "",
    username: "",
    password: "",
  }

  const [form, setForm] = React.useState(blank)

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { fullName, username, password } = form
  
    fetch(`${url}/user/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({fullName, username, password}),
    })
      .then((response) => response.json())
      .then((data) => {
        setForm(blank)
        props.history.push("/user/login")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
         <input
          type="submit"
          value="Sign Up!"
        />
      </form>
    </div>
  )
};

export default SignUp;