import './App.css';
import { useState, useEffect } from 'react';

function MatchItem(props) {
  const match=props.match;
  return (
    <li>{match.gameId} | {match.gameType}</li>
  );
}

function MatchList(props) {
  const matches = props.matches;
  const listItems = matches.map((match) =>
    <MatchItem key={match.gameId} match={match} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentMatches, setCurrentMatches] = useState(1);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);

  useEffect(() => {
    fetch('/matches').then(res => res.json()).then(data => {
      setCurrentMatches(data.results);
    })
  }, []);



  return (
    <div className="App">
      <header className="App-header"> 
        <p>The current time is {currentTime}.</p>
        <MatchList matches={currentMatches} />
      </header>
    </div>
  );
}

export default App;
