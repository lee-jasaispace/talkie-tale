/* import React from 'react';
import '../styles/TitleScreen.css';

interface TitleScreenProps {
  onStart: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div className="title-screen">
      <div className="title-content">
        <h1 className="game-title">Cherry Pie Story</h1>
        <div className="hangul-subtitle">
          <span>체리</span>
          <span>파이</span>
          <span>씨앗</span>
          <span>나무</span>
        </div>
        <button className="start-button" onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default TitleScreen;  */
import React from 'react';
import '../styles/WelcomeScreen.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="game-title">Cherry Pie Story</h1>
        <div className="falling-text-container">
          <div className="falling-text">
            <span className="falling-char" style={{ '--size': '2.8rem', '--speed': '2.8s' } as React.CSSProperties}>체</span>
            <span className="falling-char" style={{ '--size': '2.2rem', '--speed': '3.2s' } as React.CSSProperties}>리</span>
            <span className="falling-char" style={{ '--size': '2.5rem', '--speed': '2.5s' } as React.CSSProperties}>파</span>
            <span className="falling-char" style={{ '--size': '2.3rem', '--speed': '3.5s' } as React.CSSProperties}>이</span>
            <span className="falling-char" style={{ '--size': '2.7rem', '--speed': '2.7s' } as React.CSSProperties}>씨</span>
            <span className="falling-char" style={{ '--size': '2.4rem', '--speed': '3.1s' } as React.CSSProperties}>앗</span>
            <span className="falling-char" style={{ '--size': '2.6rem', '--speed': '2.9s' } as React.CSSProperties}>나</span>
            <span className="falling-char" style={{ '--size': '2.1rem', '--speed': '3.3s' } as React.CSSProperties}>무</span>
          </div>
        </div>
        <button className="start-button" onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
