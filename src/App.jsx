import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const isCounterTen = count === 10;
  const isDisabled = isCounterTen; 

  useEffect(() => {
    if (isCounterTen) {
      alert('Counter mencapai angka 10!');
      document.body.classList.add('background-red');
    } else {
      document.body.classList.remove('background-red');
    }
  }, [isCounterTen]);

  const handleIncrement = () => {
    if (!isCounterTen) {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <h1>Counter App<span> Kelompok 27</span></h1>
      
      <p className={`counter ${isCounterTen ? 'red-background' : ''}`}>Counter: {count}</p>
      <button className='button'onClick={handleIncrement} disabled={isDisabled}>
        Tambah
      </button>
    </div>
  );
}

export default App;
