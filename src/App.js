import logo from './logo.svg';
import Booklist from './components/Booklist'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css';

function App() {
  // This was all in Booklist.js and then got moved up to App.js so that it can later be drilled down/passed to Booklist.js' sister component, Footer.js
  // Below will be passed as props to child components
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


// 1. Function to check a book title
const handleCheck = (id) => {
  console.log('clicking item');
  // How to see the state change when the checkbox is checked:
  const bookItems = books.map((book) => 
  book.id === id ? { ...book, checked: !book.checked } : book);
  setBooks(bookItems); // change the state, pass in new array
  // Save our state to localStorage (so the boxes we check get saved for later)
  localStorage.setBooks('booklist', JSON.stringify(bookItems));
}

// 2. Function to delete a book title
const handleDelete = (id) => {
  console.log('deleting item');
  const bookItems = books.filter((book) => book.id !== id);
  setBooks(bookItems);
  localStorage.setBooks('booklist', JSON.stringify(bookItems));
}

  return(
    <div className='App'>
      <Header 
        title='Top 10 Books of 2022'/>

{/*// Pass books, handleCheck and handleDelete as props down to Booklist.js */}
      <Booklist
        books={books}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

{/*// Pass props down to Footer.js . Notice the attribute and prop name don't have to match*/}
      <Footer length={books.length}/>
    </div>
  )
}

export default App;
