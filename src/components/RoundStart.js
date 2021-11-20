import { useContext, useEffect } from "react";
import { AliasContext } from "./AliasProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faShare } from "@fortawesome/free-solid-svg-icons";

function RoundStart() {
  const {
    randomWord,
    generateWord,
    copySeconds,
    addWord,
    currentTeamIndex,
    teams,
    completed,
    setCompleted,
    setRandomWord,
    setStart,
  } = useContext(AliasContext);

  useEffect(() => {
    if (!randomWord) {
      setStart(false);
    }
  }, [randomWord]);

  return (
    <div className="roundStart">
      <p className="head">{teams[currentTeamIndex]}</p>
      <div>
        <label className="roundStart-container">
          {randomWord}
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <span className="roundStart-checkmark"></span>
          <button
            onClick={() => {
              addWord(teams[currentTeamIndex], randomWord);

              if (copySeconds > 0) {
                generateWord();
              } else {
                setRandomWord("");
              }

              setCompleted(false);
            }}
          >
            {copySeconds > 0 ? (
              <FontAwesomeIcon icon={faArrowCircleRight} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faShare} size="3x" />
            )}
          </button>
        </label>
      </div>
      <p className="foot">{copySeconds > 0 ? copySeconds : 0}</p>
    </div>
  );
}

export default RoundStart;
