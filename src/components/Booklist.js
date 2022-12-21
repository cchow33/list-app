import './Booklist.css';

// Destructure props from parent component without word 'props.'
const Booklist = ({ books, handleCheck, handleDelete }) => {

  return (
    <main>
      {books.length ? (
        <ul>
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
        </ul>
      ) : (
        <p>No books to read!</p>
      )}

  </main>
  );
}

  {/* Instead of the ternary expression starting on 79 & end on 100, use {books.length === 0 ? 'no books to read' : null} on line 79 instead */}

export default Booklist