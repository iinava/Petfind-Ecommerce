import React from 'react'
import '../components/Counter.css'
import { useState } from 'react';
export default function Counter() {

  const [currentNumber, setCurrentNumber] = useState(1);

  const handleIncrement = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const handleDecrement = () => {
    if (currentNumber > 1) {
      setCurrentNumber(currentNumber - 1);
    }
  };
  return (
    <div> <div className="num-block skin-1">
    <div className="num-in">
      <span className="minus dis" onClick={handleDecrement}></span>
      <input
        type="text"
        className="in-num"
        value={currentNumber}
        readOnly
      />
      <span className="plus" onClick={handleIncrement}></span>
    </div>
  </div></div>
  )
}
