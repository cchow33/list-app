import './ListOfBooks.css';
import SingleBook from './SingleBook';

const ListOfBooks = ({ books, handleCheck, handleDelete }) => {

  return (
    <main>
      {books.length ? (
        <SingleBook
          books={books}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
          <p>No books to read!</p>
      )}

    </main>
  );
}

export default ListOfBooks