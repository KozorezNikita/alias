import { useContext, useEffect } from "react";
import { AliasContext } from "./AliasProvider";
import { Link } from "react-router-dom";

function History() {
  const {
    game,
    teams,
    currentTeamIndex,
    setCurrentTeamIndex,
    changeWord,
    checkWinner,
  } = useContext(AliasContext);

  useEffect(() => {
    if (currentTeamIndex === teams.length - 1) {
      for (var i = 0; i < teams.length; i++) {
        checkWinner(teams[i]);
      }
    }
  }, [currentTeamIndex]);

  return (
    <div className="history">
      <div>
        {game[teams[currentTeamIndex]][
          game[teams[currentTeamIndex]].length - 1
        ].map((item) => (
          <label className="history-container" key={item.name}>
            {item.name}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) =>
                changeWord(teams[currentTeamIndex], item.name, e.target.checked)
              }
            />
            <span className="history-checkmark"></span>
          </label>
        ))}
      </div>

      <Link
        to="/StepFor"
        onClick={() => {
          setCurrentTeamIndex((currentTeamIndex + 1) % teams.length);
        }}
      >
        Pass the turn
      </Link>
    </div>
  );
}

export default History;
