import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import alert from "alert";

const axios = require("axios").default;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || password === "" || cfmPassword === "" || name === "") {
      alert("Signup Credentials Not Found");
      return;
    }

    if (password !== cfmPassword) {
      alert("Password does not match");
      return;
    }

    const res = await axios.post(`/api/user/signup/`, {
      name: name,
      email: email,
      password: password,
    });

   

    if (res.data.error === 0) {
      history.push("/dashboard", res.data);
    } else {
      alert(res.data.message);
    }
  }

  return (
    <div className="reg-container">
      <h3>Sign up</h3>
      <form action="" className="reg-form" onSubmit={userRegister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="re-password"
          placeholder="Confirm Password"
          onChange={(e) => setCfmPassword(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

function userRegister() {}

export default Register;
