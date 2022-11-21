/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAll, update } from './BooksAPI'
import { useEffect, useState } from 'react';
import BookList from "./BookList";
import Search from "./Search";

const bookShelfs = ['currentlyReading', 'wantToRead', 'read'];

const App2 = () => {

    const [showSearchPage, setShowSearchPage] = useState(false);
    const handleSearchPage = () => setShowSearchPage(!showSearchPage);

    const [books, setBooks] = useState([]);


    const handleShelfChanger = (shelf, book) => {
        console.log('book:', book)
        const updateBook = async () => await update(book, shelf)
        updateBook();
    }

    useEffect(() => getAll().then(allBooks =>{
        console.log('allBooks:',allBooks)
        setBooks(allBooks)}), [books]);

    // console.log('books global:', books);

    return (
        <div className="app">
            {showSearchPage ? (
                <Search handleSearchPage={handleSearchPage} Books={books} />
            ) : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {bookShelfs.map(bookShelf => {
                        return <div key={bookShelf} className="bookshelf">
                            <div className="bookshelf-books">
                                <h2 className="bookshelf-title">{bookShelf}</h2>
                                <BookList bookShelf={bookShelf} Books={books} handleShelfChanger={handleShelfChanger} />
                            </div>
                        </div>
                    })}

                    <div className="open-search">
                        <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
                    </div>

                </div>

            )}

        </div>
    );
}

export default App2;