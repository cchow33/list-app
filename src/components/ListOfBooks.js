import './ListOfBooks.css';
import SingleBook from './SingleBook';

const ListOfBooks = ({ books, handleCheck, handleDelete }) => {

  return (
    <>
      {books.length ? (
        <SingleBook
          books={books}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
          <p>No books to read!</p>
      )}
    </>
  );
}

export default ListOfBooks