import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ setInstructions, instructions }) {
  const [instructionInput, setInstructionInput] = useState('');
  const handleChange = (e) => {
    // e.preventDefault();
    setInstructionInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  };
  return <div>
    <form onSubmit={handleSubmit}>
      <input required onChange={handleChange} value={instructionInput}></input>
      <button type='sumbit'>Submit Instruction</button>
    </form>
  </div>;
}
