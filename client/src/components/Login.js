import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import alert from "alert";

const axios = require("axios").default;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Login Credentials Not Found");
      return;
    }

    const res = await axios.post(`/api/user/login/`, {
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
    <div className="login-container">
      <h3>Sign in</h3>
      <form className="login-form">
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

        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
