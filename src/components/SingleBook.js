import React from 'react'
import BookRow from './BookRow'

const SingleBook = ({ books, handleCheck, handleDelete }) => {

  return (
    <ul>
      {books.map((book) => (
      // Pass props
        <BookRow
          key={book.id}
          book={book}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default SingleBook