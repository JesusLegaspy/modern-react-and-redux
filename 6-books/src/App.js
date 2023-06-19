import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    setBooks(books.map(book => {
      if (book.id === id) return ({ ...book, title: newTitle })
      return book;
    }));
  };

  const deleteBookById = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const createBook = (title) => {
    setBooks([...books, {
      id: Math.round(Math.random() * 9999),
      title
    }]);
  };

  return (
    <div className='app'>;
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;