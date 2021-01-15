import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Header() {
  let location = useLocation();
  const history = useHistory();

  const buttonStyle = {
    display: location.pathname === "/dashboard" ? "" : "none",
  };

  function logout() {
    history.push("/");
  }

  return (
    <div className="header">
      <h1>Task Drawer</h1>
      <button style={buttonStyle} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Header;
