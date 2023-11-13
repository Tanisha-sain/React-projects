import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ColorBox from './ColorBox';
import Input from './Input';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
          <ColorBox />
          <Input />
      </div>
    </>
  )
}

export default App;
