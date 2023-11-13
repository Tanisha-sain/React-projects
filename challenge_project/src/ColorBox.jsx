import React from 'react';

const ColorBox = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div 
      className='box'
      style={{ 
        backgroundColor : colorValue, 
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
      <div>
          <p>
            {colorValue ? colorValue : "Empty value"}
          </p>
          <p>
            {hexValue ? hexValue : null}
          </p>
      </div>
    </div>
  )
}


export default ColorBox;