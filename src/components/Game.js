import { useContext, useEffect } from "react";
import { AliasContext } from "./AliasProvider";
import RoundStart from "./RoundStart";
import History from "./History";

function Game() {
  const { setCopySeconds, seconds, timer, setTimer, start } =
    useContext(AliasContext);

  useEffect(() => {
    clearInterval(timer);
    setCopySeconds(seconds);
    setTimer(
      setInterval(() => setCopySeconds((copySeconds) => copySeconds - 1), 1000)
    );
  }, [start]);

  return <div>{start ? <RoundStart /> : <History />}</div>;
}

export default Game;
