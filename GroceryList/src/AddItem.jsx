import React from 'react';

const AddItem = () => {
  return (
    <form className='addForm'>
        <input 
            type="text" 
            placeholder='Add items'
            className='addItem'
            required
        />
    </form>
  )
}

export default AddItem;