import React from 'react'
import { FaPlus } from 'react-icons/fa';
import './AddBook.css';

// React DevTools to check out new state updated automatically
const AddBook = ({ newBook, setNewBook, handleSubmit }) => {
  
  return (
    <form className="addBook" onSubmit={handleSubmit}> 
    {/* event is implicitly passed in handleSubmit */}
      <label htmlFor="title"></label>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Book'
        required
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button 
        type="submit"
        aria-label='Add Book'
      >
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddBook