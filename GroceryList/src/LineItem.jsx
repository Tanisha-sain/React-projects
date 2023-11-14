import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleCheck }) => {
  return (
    <li>
        <input 
            type="checkbox" 
            id='input'
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
        />
        <label 
            style={(item.checked) ? { textDecoration : 'line-through' } : null }
            htmlFor="input"
            onDoubleClick={()=>handleCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt 
            role='button' 
            tabIndex="0" 
            onClick={() => handleDelete(item.id)}
        />
    </li>
    )
}

export default LineItem;