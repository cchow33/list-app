import React from 'react'
import BookRow from './BookRow'

const SingleBook = ({ books, handleCheck, handleDelete }) => {

  return (
    <ul>
      {books.map((book) => (
        <BookRow/>
      ))}
    </ul>
  )
}

export default SingleBook