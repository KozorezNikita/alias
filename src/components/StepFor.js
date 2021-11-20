import { useContext } from "react";
import { AliasContext } from "./AliasProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StepFor() {
  const {
    currentTeamIndex,
    teams,
    addRound,
    setStart,
    generateWord,
    setCurrentTeamIndex,
    addPts,
    winner,
    setGame,
    setWinner,
    setUsedWords,
    setTeams,
  } = useContext(AliasContext);
  return (
    <div className="stepFor">
      {winner === "" ? (
        <div>
          <Link to="/Game">
            <button
              className="btn-stepFor"
              onClick={() => {
                addRound(teams[currentTeamIndex]);
                generateWord();
                setStart(true);
              }}
            >
              The step is for {teams[currentTeamIndex]}
            </button>
          </Link>
          <table>
            <thead>
              <tr>
                <th>
                  <FontAwesomeIcon icon={faMedal} />
                </th>
                <th>Teams</th>
                <th>
                  <FontAwesomeIcon icon={faStar} />
                </th>
              </tr>
            </thead>
            <tbody>
              {teams
                .slice()
                .sort((a, b) => addPts(b) - addPts(a))
                .map((team, i) => (
                  <tr key={team}>
                    <td>{i + 1}</td>
                    <td>{team}</td>
                    <td>{addPts(team)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Link to="/Menu">
          <button
            className="btn-stepFor"
            onClick={() => {
              setCurrentTeamIndex(0);
              setTeams([]);
              setUsedWords([]);
              setGame(null);
              setWinner("");
            }}
          >
            The winner is {winner}
          </button>
        </Link>
      )}
    </div>
  );
}

export default StepFor;
