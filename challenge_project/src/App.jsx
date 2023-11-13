import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ColorBox from './ColorBox';
import Input from './Input';
import './App.css';

function App() {
  const [colorValue, setColorValue ] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <>
      <div>
          <ColorBox 
            colorValue={colorValue}
            hexValue={hexValue}
            isDarkText={isDarkText}
          />
          <Input 
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
          />
      </div>
    </>
  )
}

export default App;
