import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return <div>
    {instructions.map((instruction, i) => {
      return <Instruction key={instruction + i} instruction={instruction} />;
    })}
  </div>;
}
