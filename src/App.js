import logo from './logo.svg';
import ListOfBooks from './components/ListOfBooks'
import Header from './components/Header'
import Footer from './components/Footer'
import AddBook from './components/AddBook';
import { useState, useEffect } from 'react'
import './App.css';
import SearchBook from './components/SearchBook';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3001/books';
  // Declare state with useState hook and load data fromo localStorage. I
  // const [books, setBooks] = useState(JSON.parse(localStorage.getItem('ListOfBooks')) || []);
  const [books, setBooks] = useState([]); //replace localStorage
  const [newBook, setNewBook] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  // When app first loads isLoading is true
  const [isLoading, setIsLoading] = useState(true); 
  

  // READ in CRUD:
  useEffect(() => {
    // create async arrow function with a try block and a catch block to catch any errors.
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data');
        const bookItems = await response.json();
        console.log(bookItems);
        setBooks(bookItems); //setBooks to bookItems
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // Simulate call to an api with a 2sec timeout
    setTimeout(() => fetchBooks(), 2000);
  }, []) // this empty array means useEffect only happens at load time

  // How do I know what param this function will receive
  const addBook = async (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const myNewBook = {id, checked: false, book};
     const bookItems = [...books, myNewBook];
     setBooks(bookItems);

    // POST request to api and add new book to our dbase:
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewBook) // new book we want to post to API
    }
    // change to await, because apiRequest is an async function
    const result = await apiRequest(API_URL, postOptions);
    // Remember apiRequest only returns an errMsg (null or has a message) so if we have a result (message is not null), setFetchError(result);
    if (result) setFetchError(result);
  }

// 1. Function to check a book 
const handleCheck = async (id) => {
  console.log('clicking item');
  // How to see the state change when the checkbox is checked:
  const bookItems = books.map((book) => 
  book.id === id ? { ...book, checked: !book.checked } : book);
  setBooks(bookItems);

  const myBook = bookItems.filter(book => book.id === id);
  const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ checked: myBook[0].checked })
  }
  // define the request url. You will see 'checked: true' in our db.json
  const requestUrl = `${API_URL}/${id}`;
  const result = await apiRequest(requestUrl, updateOptions);
  if(result) setFetchError(result);
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

      {/* Pass props to different components: */}
      <Header 
        title='Top 10 Books of 2022'/>

      <AddBook
        newBook={newBook}
        setNewBook={setNewBook}
        handleSubmit={handleSubmit}
      />
      <SearchBook
        search={search}
        setSearch={setSearch}
      />

    <main>      
      {/* If there is an error while fetching data, display here to user */}
      {isLoading && <p>Loading Items...</p>}
      {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
      {/* otherwise display: */}
      {!fetchError && !isLoading &&<ListOfBooks
        books={books.filter(book => ((book.book).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
    </main>

      <Footer length={books.length}/>
    </div>
  )
}

export default App;
