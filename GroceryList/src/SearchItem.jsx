import React from 'react';

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
            role='searchbox'
            type="text"
            placeholder='Search Item'
            className='searchItem'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem;