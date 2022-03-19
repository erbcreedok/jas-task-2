import React, { useEffect, useState } from 'react'
import './App.css';
import { fibonacci } from './functions';

let interval;
function App() {
  const [number, setNumber] = useState(null)
  const [countdown, setCountdown] = useState(0)

  function handleChange(e) {
    setNumber(+e.target.value)
  }

  function startCountdown() {
    let x = number
    clearInterval(interval)
    interval = setInterval(() => {
      setCountdown(x)
      x -= 1
      if (x < 0) {
        clearInterval(interval)
      }
    }, 1000)
  }

  return (
    <div className='container'>
      <div>
        <input onChange={handleChange} type="number" />
      </div>
      <button onClick={startCountdown}>Start countdown</button>
      <div>
        {countdown}
      </div>
    </div>
  )
}

export default App;
