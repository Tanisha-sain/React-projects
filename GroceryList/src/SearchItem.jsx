import React from 'react';

const SearchItem = () => {
  return (
    <form className='searchForm'>
        <input 
            autoFocus
            type="text"
            placeholder='Search Item'
            className='searchItem'
            required
        />
    </form>
  )
}

export default SearchItem;