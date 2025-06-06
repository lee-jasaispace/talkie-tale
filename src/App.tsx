/* import React, { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import CherryPieScene from './scenes/CherryPieScene';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <TitleScreen onStart={handleStartGame} />
      ) : (
        <CherryPieScene />
      )}
    </div>
  );
}

export default App;
 */

import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CherryPieScene from './scenes/CherryPieScene';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {started ? (
        <CherryPieScene />
      ) : (
        <WelcomeScreen onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
