import { useContext } from "react";
import { AliasContext } from "./AliasProvider";
import { Link } from "react-router-dom";

function Start() {
  const { seconds, setSeconds, ptsWin, setPtsWin } = useContext(AliasContext);

  return (
    <div>
      <div className="start">
        <label>Points for the win</label>
        <input
          type="text"
          value={ptsWin}
          onChange={(e) => setPtsWin(e.target.value)}
        />

        <label>Round time</label>
        <select value={seconds} onChange={(e) => setSeconds(e.target.value)}>
          <option value="5">5 seconds</option>
          <option value="60">60 seconds</option>
          <option value="90">90 seconds</option>
          <option value="120">120 seconds</option>
        </select>
      </div>

      <Link to="/Menu">Back to the menu</Link>
      <Link to="/TeamSelect">To team selection!</Link>
    </div>
  );
}

export default Start;
