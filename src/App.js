import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faArrowCircleRight, faShare} from "@fortawesome/free-solid-svg-icons";


const AliasContext = React.createContext();

const AliasContextProvider = (props) => {
  const [winner, setWinner] = React.useState("");
  const [theme, setTheme] = React.useState("");
  const [seconds, setSeconds] = React.useState(60);
  const [copySeconds, setCopySeconds] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const [start, setStart] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [ptsTeam1, setPtsTeam1] = React.useState(0);
  const [ptsTeam2, setPtsTeam2] = React.useState(0);
  const [ptsWin, setPtsWin] = React.useState(3);
  const [step, setStep] = React.useState(true);
  const [team1Name, setTeam1Name] = React.useState("Lyon");
  const [team2Name, setTeam2Name] = React.useState("Milan");
  const [randomWord, setRandomWord] = React.useState("");
  const [words, setWords] = React.useState(["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part", "lion", "tiger", "shark", "whale", "Gerland", "Groupama", "Giuseppe", "Meazza", "computer", "shampoo", "soap" ]);
  
  
  const generateWord = (e) => {
    e.preventDefault(); 
    var randNum = Math.floor(Math.random() * words.length);
    setRandomWord(words[randNum]);
    words.splice(randNum, 1); 
  }
  
   const ptsUp = () => {
    if (step) {
      if (completed) {
        setPtsTeam1(ptsTeam1 => ptsTeam1 + 1);
      } else {
        setPtsTeam1(ptsTeam1);
      }
    } else {
      if (completed) {
        setPtsTeam2(ptsTeam2 => ptsTeam2 + 1);
      } else {
        setPtsTeam2(ptsTeam2);
      }
    }
  }
   
   const checkWinner = () => {
     if ( ptsWin <= ptsTeam1) {
       setWinner(team1Name);
     } else if (ptsWin <= ptsTeam2) {
       setWinner(team2Name);
     } else {
       setWinner(winner)
     }
   } 
   
  
  return (
    <AliasContext.Provider value={{theme, setTheme, seconds, setSeconds,copySeconds, setCopySeconds, start, setStart, timer, setTimer, ptsWin, setPtsWin, step, setStep, team1Name, setTeam1Name, team2Name, setTeam2Name, ptsTeam1, setPtsTeam1, ptsTeam2, setPtsTeam2, words, setWords, randomWord, setRandomWord, completed, setCompleted, generateWord, ptsUp, winner, setWinner, checkWinner}}>
      {props.children}
    </AliasContext.Provider>
  )
}



function Menu() {
  return(
    <div>    
      <Link to="/Start"><p>Start</p></Link>
      <Link to="/Settings"><p>Settings</p></Link>
      <Link to="/Quit"><p>Quit</p></Link>
    </div>      
  )
}


function Game() {
  const {copySeconds, setCopySeconds, seconds, timer, setTimer, start, setStart, randomWord, step, team1Name, ptsTeam1, setPtsTeam1, team2Name, ptsTeam2, setPtsTeam2, generateWord, winner, setWinner } = React.useContext(AliasContext);
  
  
  React.useEffect(() => {
    setCopySeconds(seconds);
    setTimer( setInterval(() => setCopySeconds(copySeconds => copySeconds - 1), 1000) );
    clearInterval(timer);
  }, [start])
  
 
  
  return(
    <div className="game">
        {randomWord !== "" ? 
        <div>
          <p className="game-pts">{step ? <span className="team1">{team1Name} <br /> <span className="team1-pts">{ptsTeam1} <FontAwesomeIcon  icon={faStar}/></span> </span> : <span className="team2">{team2Name} <br /> <span className="team2-pts">{ptsTeam2} <FontAwesomeIcon  icon={faStar}/></span> </span>}</p>
          { copySeconds >= 1 ? 
           <RoundStart /> 
            :
           <RoundEnd />
          }
        </div> : 
        <div>
          { winner !== "" ?
          <div>
              <p>Congratulations! the winner is {winner}</p>
              <Link to="/Menu"><button className="btn-stng" onClick={() => {setWinner(""); setPtsTeam1(0); setPtsTeam2(0)}}>Back to the menu</button></ Link>
          </div>
          :
          <button onClick={(e) => {generateWord(e); setStart(true)}} className="btn-game">The step is for: <br /> {step ? <span className="team1">{team1Name}</span> : <span className="team2">{team2Name}</span>} </button>
          }
        </div>}
    </div>
  )
}



function RoundStart() {
  const {randomWord, completed, setCompleted, generateWord, ptsUp, copySeconds, checkWinner} = React.useContext(AliasContext);
  return(
    <div>
      <p>
        <label className="game-container">{randomWord}
          <input type="checkbox" checked={completed} onChange={(e) => setCompleted(!completed)} />
          <span className="game-checkmark"></span>
          <button className="btn-word"  onClick={(e) => {generateWord(e); ptsUp(); checkWinner(); setCompleted(false)}}><FontAwesomeIcon   icon={faArrowCircleRight} size="3x" /></button>
        </label>
      </p>
      <button className="btn-timer">{copySeconds}</button>
    </div>
  )
}



function RoundEnd() {
  const {randomWord, completed, setCompleted, ptsUp, step, setStep, setRandomWord, setStart, checkWinner} = React.useContext(AliasContext);
  return(
    <div className="game">
       <p>
         <label className="game-container">{randomWord}
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(!completed)} />
            <span className="game-checkmark"></span>
         </label>
       </p>
       <Link to="/Game"><button className="btn-step"  onClick={(e) => {ptsUp(); checkWinner(); setStep(!step); setRandomWord(""); setStart(false); setCompleted(false) }}><FontAwesomeIcon  icon={faShare}/></button></Link>
    </div>
  )
}


function Start() {
  const {seconds, setSeconds, ptsWin, setPtsWin, team1Name, setTeam1Name, team2Name, setTeam2Name } = React.useContext(AliasContext);
  
  return(
    <div>
      <div className="start">
        <label>Points for the win</label>
        <input type="text" value={ptsWin} onChange={(e) => setPtsWin(e.target.value)} />
      </div>
      <div className="start">
        <label>Team one name</label>
        <input type="text" value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} />
      </div>
      <div className="start">
        <label>Team two name</label>
        <input type="text" value={team2Name} onChange={(e) => setTeam2Name(e.target.value)} />
      </div>
      <div className="start">
        <label>Round time</label>
        <select  value={seconds} onChange={(e) => setSeconds(e.target.value) }>
          <option value="Select">Select amount of seconds</option>
          <option value="5">5 seconds</option>
          <option value="60">60 seconds</option>
          <option value="90">90 seconds</option>
          <option value="120">120 seconds</option>
        </select>
      </div>
      <Link to="/Menu"><button className="btn-strt back">Back to the menu</button></ Link>
      <Link to="/Game"><button className="btn-strt go">Start the Game!</button></ Link>
    </div>
  )
}
function Settings() {
  const {setTheme} = React.useContext(AliasContext);
  return(
    <div>
      <div className="settings">
        <label>Choose your theme</label>
        <input type="text" onChange={(e) => setTheme(e.target.value)} />
      </div>
      <div className="settings">
        <label>Choose your theme</label>
        <input type="text" onChange={(e) => setTheme(e.target.value)} />
      </div>
      <Link to="/Menu"><button className="btn-stng">Back to the menu</button></ Link>
    </div>
  )
}
function Quit() {
  return(
    <div>
      <label>Quit</label>
      <input type="text" />
      <Link to="/Menu"><button className="btn-stng">Back to the menu</button></ Link>
    </div>
  )
}






function App() {
  return (
      <AliasContextProvider>
        <Router>
          <div className="alias">
            <h1>ALIAS</h1>
          <Switch>
            <Route path="/Game">
              <Game />
            </Route>
            <Route path="/Start">
              <Start />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="/Quit">
              <Quit />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>
          </div>
      </Router>
      </AliasContextProvider>
  )
}

export default App;
