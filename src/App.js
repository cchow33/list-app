import logo from './logo.svg';
import ListOfBooks from './components/ListOfBooks'
import Header from './components/Header'
import Footer from './components/Footer'
import AddBook from './components/AddBook';
import { useState, useEffect } from 'react'
import './App.css';
import SearchBook from './components/SearchBook';

function App() {
  const API_URL = 'http://localhost:3001/books';
  // Declare state with useState hook
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('ListOfBooks')));
  // const [books, setBooks] = useState([
  //   {
  //     id: 1,
  //     title: 'Afterlives',
  //     author: 'Abdulrazak Gurnah',
  //     checked: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Stay True',
  //     author: 'Hua Hsu',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     title: 'Young Mungo',
  //     author: 'Douglas Stuart',
  //     checked: false
  //   },
  //   {
  //     id: 4,
  //     title: 'Mecca',
  //     author: 'Susan Straight',      
  //     checked: false
  //   },
  //   {
  //     id: 5,
  //     title: 'An Immense World',
  //     author: 'Ed Yong',
  //     checked: false
  //   },
  //   {
  //     id: 6,
  //     title: 'Tomorrow and Tomorrow and Tomorrow',
  //     author: 'Gabrielle Zevin',
  //     checked: false
  //   },
  //   {
  //     id: 7,
  //     title: 'Young Mungo',
  //     author: 'Douglas Stuart',
  //     checked: false
  //   },
  //   {
  //     id: 8,
  //     title: 'Losing the Plot',
  //     author: 'Derek Owusu',
  //     checked: false
  //   },])

  // const [books, setBooks] = useState()
  const [newBook, setNewBook] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setBook('ListOfBooks', JSON.stringify(books));
  }, [books]) // useEffect runs only if the dependencies change


  // const setAndSaveBooks = (newBooks) => {
  //   setBooks(newBooks);
  //   localStorage.setBook('ListOfBooks', JSON.stringify(newBooks));
  // }

  // How do I know what param this function will receive
  const addBook = (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const myNewBook = {id, checked: false, book};
     const bookItems = [...books, myNewBook];
     setBooks(bookItems);
  }

// 1. Function to check a book 
const handleCheck = (id) => {
  console.log('clicking item');
  // How to see the state change when the checkbox is checked:
  const bookItems = books.map((book) => 
  book.id === id ? { ...book, checked: !book.checked } : book);
  setBooks(bookItems);
}

// 2. Function to delete a book 
const handleDelete = (id) => {
  // console.log('deleting item');
  const bookItems = books.filter((book) => book.id !== id);
  setBooks(bookItems);
}

// 3. Function to add a book
const handleSubmit = (e) => {
  // prevent page reload when entering new book title
  e.preventDefault();
  // exit function if no book entered
  if (!newBook) return;
  // else add new book:
  addBook(newBook);
  // input field clears after submit
  setNewBook('');
}

  return(
    <div className='App'>
      <Header 
        title='Top 10 Books of 2022'/>
{/*// Pass props: */}
      <AddBook
        newBook={newBook}
        setNewBook={setNewBook}
        handleSubmit={handleSubmit}
      />
      <SearchBook
        search={search}
        setSearch={setSearch}
      />

{/*// Pass books, handleCheck and handleDelete as props down to ListOfBooks.js */}
      <ListOfBooks
        books={books.filter(book => ((book.book).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

{/*// Pass props down to Footer.js . Notice the attribute and prop name don't have to match*/}
      <Footer length={books.length}/>
    </div>
  )
}

export default App;
