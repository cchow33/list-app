import logo from './logo.svg';
import './App.css';

function App() {
  const books = [
    {
      id: 1,
      title: 'Afterlives',
      author: 'Abdulrazak Gurnah',
      checked: false
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
  ]
  
  return (
    <div className="App">
      <h1>The 10 Must-Read Books of 2022</h1>
        {books.map((book) => (
          <li className="book" key={book.id}>
            <input type="checkbox" checked={book.checked}/>
          <p>{book.title} by {book.author}</p>      
          </li>
        ))}
    </div>
  );
}

export default App;
