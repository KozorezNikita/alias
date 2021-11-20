import { useContext } from "react";
import { AliasContext } from "./AliasProvider";
import { Link } from "react-router-dom";

function Settings() {
  const { setTheme } = useContext(AliasContext);
  return (
    <div className="settings">
      <label>Choose your theme</label>
      <input type="text" onChange={(e) => setTheme(e.target.value)} />

      <label>Choose your theme</label>
      <input type="text" onChange={(e) => setTheme(e.target.value)} />

      <Link to="/Menu">Back to the menu</Link>
    </div>
  );
}

export default Settings;
