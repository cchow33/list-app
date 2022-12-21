import React from 'react'
import './SearchBook.css'

const SearchBook = ({ search, setSearch }) => {
  return (
    
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}> 
    {/* Form won't reload when enter is pressed */}
        <label htmlFor='search'></label>
        <input 
          id='search'
          type='text'
          role='searchbox'
          placeholder='Search Books'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchBook