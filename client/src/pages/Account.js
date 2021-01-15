import React from 'react'
import Login from "../components/Login";
import Register from "../components/Register";

function Account() {
    return (
        <div className="credentials">
          <Login />
          <hr className="main-hr" />
          <Register />
        </div>
      );
}

export default Account
