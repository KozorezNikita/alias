import React from "react";
import { Link } from "react-router-dom";

function Quit() {
  return (
    <div className="quit">
      <label>Quit</label>
      <input type="text" />
      <Link to="/Menu">Back to the menu</Link>
    </div>
  );
}

export default Quit;
