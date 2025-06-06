import React from 'react';

interface CharacterProps {
  expression: string;
}

const Character: React.FC<CharacterProps> = ({ expression }) => {
  return <div className="character">[Character - {expression}]</div>;
};

export default Character;
