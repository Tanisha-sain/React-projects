import React from 'react';
// import { FaTrash } from 'react-icons/fa';
import ListItem from './ListItem';

const Content = ( { items, handleDelete, handleCheck }) => {
  return (
    <main>
        {items.length ? 
            <ListItem 
                items={items}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
            /> : 
            <p style={ { textAlign : 'center' , fontSize: '20px'}}>Your list is empty.</p>
        }
    </main>
  )
}

export default Content;