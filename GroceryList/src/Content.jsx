import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Content = ( { items, setItems }) => {
  return (
    <main>
        <ul>
            {
                items.map((item) => (
                    <li>
                        <input 
                            type="checkbox" 
                            id='input'
                            checked={item.checked}
                            required
                        />
                        <label htmlFor="input">{item.item}</label>
                        <FaTrash />
                    </li>
                ))
            }
        </ul>
    </main>
  )
}

export default Content;