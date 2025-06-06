// Define the sequence: planting → watering → picking → baking

import React, { useState } from 'react';
import '../styles/CherryPieScene.css';
import dialogueData from '../data/cherryPie.json'; // we'll make this later
import DialogueBox from '../components/DialogueBox'; // reuseable
import Character from '../components/Character';     // reuseable

interface DialogueLine {
  id: string;
  korean: string;
  english: string;
  audio?: string;
  action?: string;
}

const CherryPieScene: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLine: DialogueLine = dialogueData[currentIndex];

  const handleNext = () => {
    if (currentIndex < dialogueData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('The scene is complete! 🍒🥧');
    }
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
