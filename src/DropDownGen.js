import React from 'react';

export default function DropDownGen({ setter, value, array }) {
  const handleChange = (e) => {
    return setter(e.target.value);
  };
  return <div>
    <select onChange={handleChange}>
      Select {value} Item
      {array.map((item, i) => {
        return <option key={item + i} value={i + 1}>{item}</option>;
      })}
    </select>
  </div>;
}
