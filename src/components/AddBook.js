import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import './AddBook.css';

const AddBook = ({ newBook, setNewBook, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}> 
    {/* event is implicitly passed in handleSubmit */}
      <label htmlFor="addBook">Add Book</label>
      <input
        autoFocus
        id='addBook'
        type='text'
        placeholder='Add Book'
        required
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button 
        type="submit"
        aria-label='Add Book'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddBook