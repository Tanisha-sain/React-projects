import React from 'react'

const Input = () => {
  return (
    <form className='colorInput'>
        <input 
            autoFocus
            type="text" 
            placeholder='Add color name'
            className='InputBox'
            required
        />
    </form>
  )
}

export default Input