import { useContext, useEffect } from "react";
import { AliasContext } from "./AliasProvider";
import { Link } from "react-router-dom";

function TeamSelect() {
  const { teamAmount, setTeamAmount, teams, setTeams, startGame } =
    useContext(AliasContext);

  useEffect(() => {
    setTeams(Array(parseInt(teamAmount)).fill(""));
  }, [teamAmount]);

  return (
    <div>
      <div className="teamSelect">
        <label>Select amount of teams</label>
        <select
          value={teamAmount}
          onChange={(e) => setTeamAmount(e.target.value)}
        >
          <option value="Select">Select amount of teams</option>
          <option value="2">2 teams</option>
          <option value="3">3 teams</option>
          <option value="4">4 teams</option>
        </select>
        {[...Array(parseInt(teamAmount)).keys()].map((i) => (
          <div key={i + 1}>
            <label>Team {i + 1} name</label>
            <input
              type="text"
              placeholder={"Team" + parseInt(i + 1)}
              value={teams[i] || ""}
              onChange={(e) =>
                setTeams((teams) =>
                  teams.map((team, j) => (i === j ? e.target.value : team))
                )
              }
              required
            />
          </div>
        ))}
      </div>

      <Link to="/Start">
        <button>To options</button>
      </Link>
      <Link to="/StepFor">
        <button
          className="teamSelect-btn"
          disabled={!teams.every((team) => team !== "")}
          onClick={startGame}
        >
          {" "}
          To the game!
        </button>
      </Link>
    </div>
  );
}

export default TeamSelect;
