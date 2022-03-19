import './App.css';
import React, { useState } from 'react'
import { isEven } from './functions';

function App() {
  const [number, setNumber] = useState(null)

  function handleChange(e) {
    setNumber(+e.target.value)
  }

  return (
    <div className='container'>
      <div>
        <input onChange={handleChange} type="number" />
      </div>
      <div>
        { isEven(number) ? 'Четное' : 'Не четное'}
      </div>
    </div>
  )
}

export default App;
