import React from 'react';

export default function OrderName({ setOrderName }) {
  const handleChange = (e) => {
    setOrderName(e.target.value);
  };
  return <div>
    <input onChange={handleChange} placeholder='Enter Name For Order'></input>
  </div>;
}
