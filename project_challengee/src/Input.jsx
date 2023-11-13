import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form className='colorInput' onSubmit={(e) => e.preventDefault()}>
        <input 
            autoFocus
            type="text" 
            placeholder='Add color name'
            className='InputBox'
            id='Input'
            value={colorValue}
            onChange={(e) => {
              setColorValue(e.target.value);
              if(e.target.value === ""){
                setHexValue(null);
              }else{
                setHexValue(colorNames(e.target.value));
              }
            }}
            required
        />
        <button 
          type='button'
          onClick={()=> setIsDarkText(!isDarkText)}  
        >
          Toggle text color
        </button>
    </form>
  )
}

export default Input;