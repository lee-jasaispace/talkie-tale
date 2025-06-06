import React from 'react';
import Character from './Character';
import DialogueBox from './DialogueBox';
import '../styles/CherryPieScene.css';

interface Line {
  korean: string;
  english: string;
  audio?: string;
}

const CherryPieScene: React.FC = () => {
  const [currentLine, setCurrentLine] = React.useState<Line>({
    korean: '',
    english: '',
    audio: ''
  });

  const handleNext = () => {
    // Implement next line logic here
  };

  return (
    <div className="scene-container">
      <Character expression="happy" />
      <DialogueBox
        korean={currentLine.korean}
        english={currentLine.english}
        audio={currentLine.audio}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CherryPieScene; 