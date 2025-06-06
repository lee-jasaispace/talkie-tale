import React from 'react';

interface DialogueBoxProps {
  korean: string;
  english: string;
  audio?: string;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ korean, english, audio }) => {
  return (
    <div className="dialogue-box">
      <p><strong>{korean}</strong></p>
      <p>{english}</p>
      {audio && <audio src={audio} controls />}
    </div>
  );
};

export default DialogueBox;
