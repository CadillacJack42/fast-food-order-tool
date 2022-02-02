import React from 'react';

export default function InstructionsList({ instructions }) {
  return <div>
    {instructions.map((instruction, i) => {
      return <p key={instruction + i}>{instruction}</p>;
    })}
  </div>;
}
