import React from 'react'

const BookRow = ({ book, handleCheck, handleDelete }) => {
  return (
    <li className="book">
      <input 
        type="checkbox" 
        checked={book.checked}
        //onChange event to check boxes
        onChange={() => handleCheck(book.id)}
      />
      <p 
        style={(book.checked) ? {textDecoration: 'line-through' } : null} 
        onDoubleClick={() => handleCheck(book.id)}>
        {book.title} by {book.author}
      </p>     
      <span onClick={() => handleDelete(book.id)}>x</span> 
    </li>
  )
}

export default BookRow