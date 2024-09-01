import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0;
  let [counter, setCounter] = useState(0);

  const incValue = () => {
    if(counter < 20) counter++;
    setCounter(counter);
  }

  const decValue = () => {
    if(counter > 0) counter--;
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={incValue}
      >Increase Value</button>
      <br />
      <br />
      <button
        onClick={decValue}
      >Decrease Value</button>
    </>
  )
}

export default App
