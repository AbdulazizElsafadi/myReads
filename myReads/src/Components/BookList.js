// This functional component renders a list of books with in a specified book shelf
import { getAll, update } from './BooksAPI'
import Book from './Book'
import { useEffect, useState } from 'react';

const BookList = ({ bookShelf }) => {
    const [books, setBooks] = useState([]);
    // const [currentReading, setCurrentReading] = useState([]);
    // const [wantReading, setWantReading] = useState([]);
    // const [read, setRead] = useState([]);

    const fetchAllBooks = async () => await getAll().then(allBooks => setBooks(books.concat(allBooks)));

    const handleShelfChanger = async (shelf, book) => {
        // if (shelf === 'currently reading') {
        //     setCurrentReading([book, ...currentReading])
        //     console.log('current reading: ', currentReading)
        // }
        // else if (shelf === 'want to read') {
        //     setWantReading([book, ...wantReading])
        //     console.log('want to read: ', wantReading)
        // }

        // else if (shelf === 'read'){
        //     setRead([book, ...read])
        //     console.log('read: ', read)
        // }

        console.log('book before:', book)
        const updateBook = async () => await update(book, shelf).then(updatedBook => console.log('updatedBook:', updatedBook))
        await updateBook();
        console.log('book after:', book)
        fetchAllBooks();
    }

    useEffect(() => {
       fetchAllBooks();
    }, []);

    // console.log('books global:', books);

    // We need to filter the books with specified bookShelf then map the books
    return (
        <ul className="books-grid">
            {books.map(book => {
                return <li key={book.id}>
                    <Book
                        Book={book}
                        handleShelfChanger={handleShelfChanger} />
                </li>
            })}
        </ul>
    );
};

export default BookList;