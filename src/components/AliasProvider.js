import { useState, createContext } from "react";
import words from "../words/words";

export const AliasContext = createContext();

const AliasProvider = (props) => {
  const [theme, setTheme] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [copySeconds, setCopySeconds] = useState("");
  const [timer, setTimer] = useState("");
  const [start, setStart] = useState(false);
  const [ptsWin, setPtsWin] = useState(30);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [teamAmount, setTeamAmount] = useState(2);
  const [usedWords, setUsedWords] = useState([]);
  const [teams, setTeams] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [game, setGame] = useState(null);
  const [round, setRound] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [winner, setWinner] = useState("");

  const generateWord = () => {
    let difference = words.filter((word) => !usedWords.includes(word));
    let randNum = Math.floor(Math.random() * difference.length);
    let word = difference[randNum];
    setRandomWord(word);
    setUsedWords(usedWords.concat([word]));
  };

  const startGame = () => {
    setGame(teams.reduce((acc, team) => ({ ...acc, [team]: [] }), {}));
  };

  const addRound = (team) => {
    setGame((game) => {
      return { ...game, [team]: game[team].concat([[]]) };
    });
  };

  const addWord = (team) => {
    setGame((game) => {
      return {
        ...game,
        [team]: game[team].slice(0, game[team].length - 1).concat([
          game[team][game[team].length - 1].concat([
            {
              name: randomWord,
              completed: completed,
            },
          ]),
        ]),
      };
    });
  };

  const changeWord = (team, randomWord, completed) => {
    setGame((game) => {
      return {
        ...game,
        [team]: game[team].slice(0, game[team].length - 1).concat([
          game[team][game[team].length - 1].map((item) =>
            item.name === randomWord
              ? {
                  ...item,
                  completed: completed,
                }
              : item
          ),
        ]),
      };
    });
  };

  const addPts = (team) => {
    let count = 0;
    for (var i = 0; i < game[team].length; i++) {
      for (var j = 0; j < game[team][i].length; j++) {
        if (game[team][i][j].completed) {
          count++;
        }
      }
    }
    return count;
  };

  const checkWinner = (team) => {
    if (addPts(team) >= ptsWin) {
      setWinner(team);
    }
  };

  return (
    <AliasContext.Provider
      value={{
        theme,
        setTheme,
        seconds,
        setSeconds,
        copySeconds,
        setCopySeconds,
        start,
        setStart,
        timer,
        setTimer,
        ptsWin,
        setPtsWin,
        randomWord,
        setRandomWord,
        teamAmount,
        setTeamAmount,
        teams,
        setTeams,
        currentTeamIndex,
        setCurrentTeamIndex,
        usedWords,
        setUsedWords,
        game,
        setGame,
        round,
        setRound,
        completed,
        setCompleted,
        winner,
        setWinner,
        generateWord,
        startGame,
        addWord,
        addRound,
        changeWord,
        addPts,
        checkWinner,
      }}
    >
      {props.children}
    </AliasContext.Provider>
  );
};

export default AliasProvider;
