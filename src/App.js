import React, {useState} from 'react';
import { FaGithub } from 'react-icons/fa';
import Scoreboard from './Components/Scoreboard';
import MainContent from './Components/MainContent';
import './Styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0)

  const increaseScore = () => {
    setScore(score + 1);
  };
  const checkBestscore = (v) => {
    if (highscore < v) {
      setHighscore(v);
    }
  };
  const resetScore = () => {
    setScore(0);
  };


  return (
    <div className="App">
      <header>Memory Game</header>
      <main>
        <Scoreboard score={score} highscore={highscore}/>
        <MainContent 
        increaseScore={increaseScore}
        checkBestscore={checkBestscore}
        setScore={setScore}
        resetScore={resetScore}
        />
      </main>
      <footer>
        <p className='mx-3'>SandyWezzy on GitHub</p>
        <a href="https://github.com/SandyWezzy" target="_blank" rel="noreferrer"><FaGithub /></a>
      </footer>
    </div>
  );
}

export default App;
