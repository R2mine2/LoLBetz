import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);



  return (
    <div className="App">
      <header className="App-header"> 
        <p>The current time is {currentTime}.</p>
        <ul>
          <li className="Team">Team A</li>
          <li>Team B</li>
          <li>Team C</li>
          <li>Team D</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
