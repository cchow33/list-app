import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Afterlives',
      author: 'Abdulrazak Gurnah',
      checked: true
    },
    {
      id: 2,
      title: 'Stay True',
      author: 'Hua Hsu',
      checked: false
    },
    {
      id: 3,
      title: 'Young Mungo',
      author: 'Douglas Stuart',
      checked: false
    },
    {
      id: 4,
      title: 'Mecca',
      author: 'Susan Straight',      
      checked: false
    },
    {
      id: 5,
      title: 'Butts: A Backstory',
      author: 'Heather Radke',
      checked: false
    },
    {
      id: 6,
      title: 'Tomorrow and Tomorrow and Tomorrow',
      author: 'Gabrielle Zevin',
      checked: false
    },
    {
      id: 7,
      title: 'Young Mungo',
      author: 'Douglas Stuart',
      checked: false
    },
    {
      id: 8,
      title: 'Losing the Plot',
      author: 'Derek Owusu',
      checked: false
    },
  ])

  // 1. Function to check an item
  const handleCheck = (id) => {
    console.log('clicking item');
    // How to see the state change when the checkbox is checked:
    const bookItems = books.map((book) => 
    book.id === id ? { ...book, checked: !book.checked } : book);
    setBooks(bookItems); // change the state, pass in new array
    // Save our state to localStorage (so the boxes we check get saved for later)
    localStorage.setBooks('booklist', JSON.stringify(bookItems));
  }
  
  // 2. Function to delete an item
  const handleDelete = (id) => {
    console.log('deleting item');
    const bookItems = books.filter((book) => book.id !== id);
    setBooks(bookItems);
    localStorage.setBooks('booklist', JSON.stringify(bookItems));
  }
 
  return (
    <div className="App">
      <h1>The 10 Must-Read Books of 2022</h1>
        {books.length === 0 ? 'no books to read' : null}



        {books.map((book) => (
          <li className="book" key={book.id}>
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
        ))}
    </div>
  );
}

export default App;
