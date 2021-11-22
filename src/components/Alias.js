import React from "react";
import { Link } from "react-router-dom";

function Alias() {
  return (
    <div className="menu">
      <Link to="/Start">Start</Link>
      <Link to="/Settings">Settings</Link>
      <Link to="/Quit">Quit</Link>
    </div>
  );
}

export default Alias;
