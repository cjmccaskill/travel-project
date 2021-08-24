import React from "react";
import "./SignUp.scss";

const SignUp = () => {
  const url = `https://act-travel-project-api.herokuapp.com/user/signup`;

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
        console.log(data)
        setForm(blank)
        props.history.push("/login")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
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
      </form>
    </div>
  )
};

export default SignUp;